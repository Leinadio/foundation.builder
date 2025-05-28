'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { 
  GoogleAuthProvider, 
  signInWithPopup,
  onAuthStateChanged,
  UserCredential
} from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { auth } from '@/lib/firebase';
import Image from 'next/image';
import Link from 'next/link';
import { createUserWithEmptyWorkflows } from '@/services/users';

// Type pour les actions en attente (à garder synchronisé avec le type dans page.tsx)
type PendingActionType = 'market' | 'idea';
interface PendingAction {
  value: string;
  type: PendingActionType;
  timestamp: number;
}

export default function AuthPage({ params }: { params: Promise<{ pendingValue: string; pendingType: PendingActionType }> }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'fr'; // Extrait la langue de l'URL
  const { pendingValue, pendingType } = React.use(params);

  // Stocker les informations d'action en attente si elles existent
  useEffect(() => {
    if (pendingValue && pendingType) {
      const pendingAction: PendingAction = {
        value: pendingValue,
        type: pendingType === 'idea' ? 'idea' : 'market',
        timestamp: Date.now()
      };
      
      // Sauvegarder dans le localStorage pour le récupérer après authentification
      localStorage.setItem('pendingAction', JSON.stringify(pendingAction));
    }
  }, [pendingValue, pendingType]);

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential: UserCredential = await signInWithPopup(auth, provider);
      
      // Créer la collection utilisateur avec workflows vide
      if (userCredential.user) {
        const { uid, displayName, email, photoURL } = userCredential.user;
        await createUserWithEmptyWorkflows(uid, {
          displayName: displayName || undefined,
          email: email || undefined,
          photoURL: photoURL || undefined
        });
      }
      
      // Rediriger vers la page d'accueil pour traiter l'action en attente
      router.push(`/${lang}`);
    } catch {
      return;
    }
  };

  // Vérifier l'état d'authentification avec Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    
    // Nettoyer l'abonnement lors du démontage
    return () => unsubscribe();
  }, []);

  // Redirection après authentification
  useEffect(() => {
    if (isAuthenticated) {
      // Rediriger vers la page d'accueil pour traiter l'action en attente s'il y en a une
      router.push(`/${lang}`);
    }
  }, [isAuthenticated, router, lang]);

  // Fonction pour afficher l'action en attente
  const renderPendingActionBanner = () => {
    if (!pendingValue || !pendingType) return null;
    
    return (
      <div className="mb-6 p-4 rounded-lg bg-amber-50 border border-amber-200">
        <h3 className="text-amber-800 font-medium mb-1">Action en attente</h3>
        <p className="text-sm text-amber-700">
          Après vous être connecté(e), vous allez créer un workflow basé sur {" "}
          {pendingType === 'market' ? 'le marché' : "l'idée"}: <strong>{pendingValue}</strong>
        </p>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen flex bg-white">
      {/* Partie gauche - Formulaire d'authentification */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-[2rem] font-medium tracking-tight">Commencez maintenant</h1>
              <p className="text-base text-gray-600">Entre vos identifiants pour accéder à votre compte</p>
            </div>
            
            {/* Affichage de l'action en attente */}
            {renderPendingActionBanner()}

            <div className="grid grid-cols-1 gap-4">
              <Button 
                variant="outline" 
                className="w-full h-12 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                onClick={handleGoogleSignIn}
              >
                <Image src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5 mr-2" alt="Google" width={20} height={20} />
                S&apos;inscrire avec Google
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">ou</span>
              </div>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="block text-sm font-normal">
                  Nom et prénom
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Entrez votre nom"
                  className="w-full h-12 px-4 rounded-full border border-gray-200 focus:ring-1"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="block text-sm font-normal">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Entrez votre email"
                  className="w-full h-12 px-4 rounded-full border border-gray-200 focus:ring-1"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="block text-sm font-normal">
                  Mot de passe
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    placeholder="min 8 caractères"
                    className="w-full h-12 px-4 rounded-full border border-gray-200 focus:ring-1"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 rounded border-gray-300 text-[#4F46E5] focus:ring-[#4F46E5]"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  J&apos;accepte les{" "}
                  <Link href={`/${lang}/terms`} className="text-gray-900 underline">
                    Conditions d&apos;utilisation
                  </Link>
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 rounded-full transition-colors text-white font-medium"
              >
                S&apos;inscrire
              </Button>

              <p className="text-center text-sm text-gray-600">
                Vous avez déjà un compte ? 
                <Link href={`/${lang}/login`} className="text-[#4F46E5] hover:underline">
                  Se connecter
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