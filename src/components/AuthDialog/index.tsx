"use client"

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AuthDialogProps } from './types';
import Image from 'next/image';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { GoogleAuthProvider, signInWithPopup, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { createUserWithEmptyWorkflows } from '@/services/users';
import { useClientTranslation } from '@/hooks/useClientTranslation';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

// Définir l'interface pour Firebase Auth Error
interface FirebaseAuthError {
  code: string;
  message: string;
}

/**
 * Composant visuel de la boîte de dialogue d'authentification
 */
export const AuthDialog: React.FC<AuthDialogProps> = ({
  isOpen,
  onOpenChange,
}) => {
  const { t, locale } = useClientTranslation('authDialog');
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [formType, setFormType] = useState<'login' | 'register' | 'forgot-password'>('login');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [termsError, setTermsError] = useState('');
  const [formError, setFormError] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const { toast } = useToast();
  const resetErrors = () => {
    setEmailError('');
    setPasswordError('');
    setNameError('');
    setTermsError('');
    setFormError('');
    setResetSuccess(false);
  };

  // Fonction pour envoyer l'email de bienvenue
  const handleSendWelcomeEmail = async (
    userEmail: string, 
    displayName: string, 
    isNewUser: boolean = false,
    language: 'fr' | 'en' = locale as 'fr' | 'en'
  ) => {
    try {
      const response = await fetch('/api/email/welcome', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          name: displayName,
          isNewUser: isNewUser,
          language: language
        }),
      });

      if (!response.ok) {
        console.error(`Erreur lors de l'envoi de l'email de bienvenue: ${response.status}`);
      } else {
        console.log(`Email de bienvenue envoyé à ${userEmail}`);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email de bienvenue:", error);
      // On continue même si l'envoi d'email échoue
    }
  };

  const handleGoogleSignIn = async () => {
    resetErrors();
    try {
      const provider = new GoogleAuthProvider();
      const userCredential: UserCredential = await signInWithPopup(auth, provider);
      if (!userCredential.user) {
        onOpenChange(false);
        return;
      }

      const { uid, displayName, email, photoURL } = userCredential.user;
      await createUserWithEmptyWorkflows(uid, {
        displayName: displayName || undefined,
        email: email || undefined,
        photoURL: photoURL || undefined
      });

      // Obtenir le token ID pour créer la session
      const idToken = await userCredential.user.getIdToken();
      
      // Créer la session côté serveur
      const response = await fetch('/api/auth/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idToken }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la création de la session');
      }
      
      // Envoyer un email de bienvenue
      if (email) {
        const userName = displayName || email.split('@')[0];
        const isNewUser = userCredential.user.metadata.creationTime === userCredential.user.metadata.lastSignInTime;
        handleSendWelcomeEmail(email, userName, isNewUser);
      }
      
      onOpenChange(false);
      toast({
        description: t('toast.loginSuccess'),
        className: cn(
          'bg-green-500 text-white top-24 right-0 flex fixed md:max-w-[420px] md:top-24 md:right-4'
        ),
      });
      router.push(`/${locale}/app`);
    } catch {
      setFormError(t('errors.googleAuthFailed'));
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    resetErrors();

    let hasError = false;
    if (!email) {
      setEmailError(t('errors.emailRequired'));
      hasError = true;
    }

    if (!password) {
      setPasswordError(t('errors.passwordRequired'));
      hasError = true;
    }

    if (hasError) return;

    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        // Obtenir le token ID pour créer la session
        const idToken = await userCredential.user.getIdToken();
        
        // Créer la session côté serveur
        const response = await fetch('/api/auth/session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ idToken }),
        });

        if (!response.ok) {
          throw new Error('Erreur lors de la création de la session');
        }

        // Envoyer un email de bienvenue (connexion, pas une nouvelle inscription)
        const userName = userCredential.user.displayName || email.split('@')[0];
        handleSendWelcomeEmail(email, userName, false);

        onOpenChange(false);
        router.push(`/${locale}/app`);
      }
    } catch (error: unknown) {
      const authError = error as FirebaseAuthError;
      console.log('authError : ', authError);
      
      if (authError.code) {
        if (authError.code === 'auth/invalid-credential') {
          setFormError(t('errors.invalidCredentials'));
        } else if (authError.code === 'auth/user-not-found') {
          setEmailError(t('errors.userNotFound'));
        } else if (authError.code === 'auth/wrong-password') {
          setPasswordError(t('errors.wrongPassword'));
        } else {
          setFormError(t('errors.unknown'));
        }
      } else {
        setFormError(t('errors.unknown'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    resetErrors();

    let hasError = false;
    if (!name) {
      setNameError(t('errors.nameRequired'));
      hasError = true;
    }

    if (!email) {
      setEmailError(t('errors.emailRequired'));
      hasError = true;
    }

    if (!password) {
      setPasswordError(t('errors.passwordRequired'));
      hasError = true;
    } else if (password.length < 8) {
      setPasswordError(t('errors.passwordLength'));
      hasError = true;
    }

    if (!termsAccepted) {
      setTermsError(t('errors.termsRequired'));
      hasError = true;
    }

    if (hasError) return;

    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        const { uid } = userCredential.user;
        await createUserWithEmptyWorkflows(uid, {
          displayName: name,
          email,
        });

        // Obtenir le token ID pour créer la session
        const idToken = await userCredential.user.getIdToken();
        
        // Créer la session côté serveur
        const response = await fetch('/api/auth/session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ idToken }),
        });

        if (!response.ok) {
          throw new Error('Erreur lors de la création de la session');
        }

        // Envoyer un email de bienvenue (nouvelle inscription)
        handleSendWelcomeEmail(email, name, true);

        onOpenChange(false);
        router.push(`/${locale}/app`);
      }
    } catch (error: unknown) {
      const authError = error as FirebaseAuthError;
      console.log('authError : ', authError);
      
      if (authError.code) {
        if (authError.code === 'auth/email-already-in-use') {
          setEmailError(t('errors.emailInUse'));
        } else if (authError.code === 'auth/invalid-email') {
          setEmailError(t('errors.invalidEmail'));
        } else if (authError.code === 'auth/weak-password') {
          setPasswordError(t('errors.weakPassword'));
        } else {
          setFormError(t('errors.unknownRegistration'));
        }
      } else {
        setFormError(t('errors.unknownRegistration'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    resetErrors();

    if (!email) {
      setEmailError(t('errors.emailRequired'));
      return;
    }

    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSuccess(true);
    } catch (error: unknown) {
      const authError = error as FirebaseAuthError;
      
      if (authError.code) {
        if (authError.code === 'auth/user-not-found') {
          setEmailError(t('errors.userNotFound'));
        } else if (authError.code === 'auth/invalid-email') {
          setEmailError(t('errors.invalidEmail'));
        } else if (authError.code === 'auth/too-many-requests') {
          setFormError(t('errors.tooManyRequests'));
        } else {
          setFormError(t('errors.unknownReset'));
        }
      } else {
        setFormError(t('errors.unknownReset'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFormType = (type: 'login' | 'register' | 'forgot-password') => {
    resetErrors();
    setFormType(type);
  };

  const renderDialogTitle = () => {
    if (formType === 'login') {
      return (
        <>
          <DialogTitle className="text-[2rem] font-medium tracking-tight">{t('login.title')}</DialogTitle>
          <DialogDescription className="text-base text-gray-600">
            {t('login.subtitle')}
          </DialogDescription>
        </>
      );
    } else if (formType === 'register') {
      return (
        <>
          <DialogTitle className="text-[2rem] font-medium tracking-tight">{t('register.title')}</DialogTitle>
          <DialogDescription className="text-base text-gray-600">
            {t('register.subtitle')}
          </DialogDescription>
        </>
      );
    } else {
      return (
        <>
          <DialogTitle className="text-[2rem] font-medium tracking-tight">{t('forgotPassword.title')}</DialogTitle>
          <DialogDescription className="text-base text-gray-600">
            {t('forgotPassword.subtitle')}
          </DialogDescription>
        </>
      );
    }
  };

  const displayLoginForm = () => {
    return (
      <form onSubmit={handleEmailSignIn} className="space-y-6">
        {formError && (
          <div className="p-3 text-sm font-medium text-red-500 bg-red-50 rounded-md">
            {formError}
          </div>
        )}
        
        <div className="space-y-2">
          <Label htmlFor="email" className="block text-sm font-normal">
            {t('login.email')}
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('common.emailPlaceholder')}
            className={`w-full h-12 px-4 border ${emailError ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-1'}`}
          />
          {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="password" className="block text-sm font-normal">
              {t('login.password')}
            </Label>
            <button 
              type="button" 
              className="text-sm hover:underline text-[#4F46E5]"
              onClick={() => toggleFormType('forgot-password')}
            >
              {t('login.forgotPassword')}
            </button>
          </div>
          <div className="relative">
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t('register.passwordPlaceholder')}
              className={`w-full h-12 px-4 border ${passwordError ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-1'}`}
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
              </svg>
            </button>
          </div>
          {passwordError && <p className="mt-1 text-sm text-red-500">{passwordError}</p>}
        </div>

        <Button 
          type="submit" 
          className="w-full h-12 transition-colors font-medium"
          disabled={isLoading}
        >
          {isLoading ? t('login.loginLoading') : t('login.loginButton')}
        </Button>

        <p className="text-center text-sm text-gray-600">
          {t('login.noAccount')}
          <button 
            type="button"
            onClick={() => toggleFormType('register')}
            className="text-[#4F46E5] hover:underline ml-1"
          >
            {t('login.register')}
          </button>
        </p>
      </form>
    )
  }

  const displayRegisterForm = () => {
    return (
      <form onSubmit={handleEmailRegister} className="space-y-6">
        {formError && (
          <div className="p-3 text-sm font-medium text-red-500 bg-red-50 rounded-md">
            {formError}
          </div>
        )}
        
        <div className="space-y-2">
          <Label htmlFor="name" className="block text-sm font-normal">
            {t('register.name')}
          </Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('common.namePlaceholder')}
            className={`w-full h-12 px-4 border ${nameError ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-1'}`}
          />
          {nameError && <p className="mt-1 text-sm text-red-500">{nameError}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="register-email" className="block text-sm font-normal">
            {t('register.email')}
          </Label>
          <Input
            id="register-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('common.emailPlaceholder')}
            className={`w-full h-12 px-4 border ${emailError ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-1'}`}
          />
          {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="register-password" className="block text-sm font-normal">
            {t('register.password')}
          </Label>
          <div className="relative">
            <Input
              id="register-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t('register.passwordPlaceholder')}
              className={`w-full h-12 px-4 border ${passwordError ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-1'}`}
            />
          </div>
          {passwordError && <p className="mt-1 text-sm text-red-500">{passwordError}</p>}
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className={`w-4 h-4 rounded border ${termsError ? 'border-red-500 text-red-500' : 'border-gray-300 text-[#4F46E5]'} focus:ring-[#4F46E5]`}
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            {t('register.terms')}
            <a href="#" className="text-gray-900 underline">
              {t('register.termsLink')}
            </a>
          </label>
        </div>
        {termsError && <p className="mt-1 text-sm text-red-500">{termsError}</p>}

        <Button 
          type="submit" 
          className="w-full h-12 transition-colors font-medium"
          disabled={isLoading}
        >
          {isLoading ? t('register.registerLoading') : t('register.registerButton')}
        </Button>

        <p className="text-center text-sm text-gray-600">
          {t('register.hasAccount')} 
          <button 
            type="button"
            onClick={() => toggleFormType('login')}
            className="text-[#4F46E5] hover:underline ml-1"
          >
            {t('register.login')}
          </button>
        </p>
      </form>
    )
  }

  const displayForgotPasswordForm = () => {
    return (
      <form onSubmit={handlePasswordReset} className="space-y-6">
        {formError && (
          <div className="p-3 text-sm font-medium text-red-500 bg-red-50 rounded-md">
            {formError}
          </div>
        )}
        
        {resetSuccess && (
          <div className="p-3 text-sm font-medium text-green-600 bg-green-50 rounded-md">
            {t('forgotPassword.resetSuccess', { email })}
          </div>
        )}
        
        <div className="space-y-2">
          <Label htmlFor="reset-email" className="block text-sm font-normal">
            {t('forgotPassword.email')}
          </Label>
          <Input
            id="reset-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('common.emailPlaceholder')}
            className={`w-full h-12 px-4 border ${emailError ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-1'}`}
          />
          {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>}
        </div>

        <Button 
          type="submit" 
          className="w-full h-12 transition-colors font-medium"
          disabled={isLoading}
        >
          {isLoading ? t('forgotPassword.resetLoading') : t('forgotPassword.resetButton')}
        </Button>

        <p className="text-center text-sm text-gray-600">
          <button 
            type="button"
            onClick={() => toggleFormType('login')}
            className="text-[#4F46E5] hover:underline"
          >
            {t('forgotPassword.backToLogin')}
          </button>
        </p>
      </form>
    )
  }

  const renderForm = () => {
    if (formType === 'login') {
      return displayLoginForm();
    } else if (formType === 'register') {
      return displayRegisterForm();
    } else {
      return displayForgotPasswordForm();
    }
  };

  const getGoogleButtonText = () => {
    if (formType === 'login') {
      return t('login.googleButton');
    } else if (formType === 'register') {
      return t('register.googleButton');
    }
    return "";
  };

  const showGoogleButton = formType !== 'forgot-password';

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader className="space-y-0">
          {renderDialogTitle()}
        </DialogHeader>
        <div className="w-full flex bg-white">
          <div className="w-full flex items-center justify-center p-8">
            <div className="w-full max-w-md">
              <div className="space-y-8">
                {showGoogleButton && (
                  <>
                    <div className="grid grid-cols-1 gap-4">
                      <Button 
                        variant="outline" 
                        className="w-full h-12 border border-gray-200 hover:bg-gray-50 transition-colors"
                        onClick={handleGoogleSignIn}
                        disabled={isLoading}
                      >
                        <Image src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5 mr-2" alt="Google" width={20} height={20} />
                        {getGoogleButtonText()}
                      </Button>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500">{t('common.or')}</span>
                      </div>
                    </div>
                  </>
                )}

                {renderForm()}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 