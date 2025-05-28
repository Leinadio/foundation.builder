'use client';

import React, { useState, useEffect } from 'react';
import { 
  GoogleAuthProvider, 
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  UserCredential
} from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { auth } from '@/lib/firebase';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { createUserWithEmptyWorkflows } from '@/services/users';
import { useClientTranslation } from '@/hooks/useClientTranslation';
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const { locale } = useClientTranslation();
  
  // Vérifier l'état d'authentification avec Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    
    return () => unsubscribe();
  }, []);

  // Redirection après authentification
  useEffect(() => {
    if (isAuthenticated) {
      router.push(`/${locale}`);
    }
  }, [isAuthenticated, router, locale]);

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential: UserCredential = await signInWithPopup(auth, provider);
      
      // Créer la collection utilisateur avec workflows vide si c'est un nouvel utilisateur
      if (userCredential.user && userCredential.operationType === 'signIn') {
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
      }
    } catch (error) {
      console.log("Erreur d'authentification Google:", error);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
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
    } catch (error) {
      console.log("Erreur d'authentification:", error);
    }
  };

  return (
    <div className="w-full min-h-screen flex bg-white">
      {/* Partie gauche - Formulaire d'authentification */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-[2rem] font-medium tracking-tight">Content de vous revoir</h1>
              <p className="text-base text-gray-600">Entre vos identifiants pour accéder à votre compte</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <Button 
                variant="outline" 
                className="w-full h-12 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                onClick={handleGoogleSignIn}
              >
                <Image src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5 mr-2" alt="Google" width={20} height={20} />
                Se connecter avec Google
              </Button>
              {/* <Button 
                variant="outline" 
                className="w-full h-12 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm.5-13c1.381 0 2.5 1.119 2.5 2.5 0 1.232-.86 2.265-2 2.5v1.5h-1v-2.5c0-.276.224-.5.5-.5s.5.224.5.5h2c0-1.105-.895-2-2-2s-2 .895-2 2h-1c0-1.381 1.119-2.5 2.5-2.5zm-.5 7h1v1h-1v-1z" fill="currentColor"/>
                </svg>
                Se connecter avec Apple
              </Button> */}
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">or</span>
              </div>
            </div>

            <form onSubmit={handleEmailSignIn} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="block text-sm font-normal">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-12 px-4 rounded-full border border-gray-200 focus:ring-1"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="password" className="block text-sm font-normal">
                    Mot de passe
                  </Label>
                  <a href="#" className="text-sm hover:underline">
                    Mot de passe oublié?
                  </a>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="min 8 chars"
                    className="w-full h-12 px-4 rounded-full border border-gray-200 focus:ring-1"
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
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 rounded-full transition-colors text-white font-medium"
              >
                Se connecter
              </Button>

              <p className="text-center text-sm text-gray-600">
                Vous n&apos;avez pas de compte ? 
                <Link href="/register" className="text-[#4F46E5] hover:underline">
                   S&apos;inscrire
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Partie droite - Image et citation */}
      <div className="hidden md:flex md:w-1/2 relative p-8">
        <div 
          className="absolute inset-0 bg-cover bg-center m-8 rounded-2xl overflow-hidden shadow-xl" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-16 text-white">
          <div className="flex items-center space-x-4 mb-4">
            <Image 
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop" 
              alt="Profile" 
              className="w-12 h-12 rounded-full border-2 border-white"
              width={48}
              height={48}
            />
            <div>
              <p className="font-medium">Jean Dupont</p>
              <p className="text-sm text-white/70">Entrepreneur & Innovateur</p>
            </div>
          </div>
          <blockquote className="text-xl font-serif italic">
            &ldquo;L&apos;innovation distingue un leader d&apos;un suiveur. Trouvez votre marché, identifiez les problèmes et créez des solutions qui changent la donne.&rdquo;
          </blockquote>
        </div>
      </div>
    </div>
  );
} 