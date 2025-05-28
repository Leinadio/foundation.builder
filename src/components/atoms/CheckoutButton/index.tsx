"use client";

import React, { useState } from 'react';
import { Button, ButtonProps } from "@/components/ui/button";
import { useAuth } from "@/context/Auth/AuthContext";
import { AuthDialog } from "@/components/AuthDialog";
import { useRouter } from 'next/navigation';
import { useClientTranslation } from '@/hooks/useClientTranslation';
import { analytics } from '@/lib/firebase';
import { logEvent } from 'firebase/analytics';

interface CheckoutButtonProps extends ButtonProps {
  priceId: string;
  mode?: 'payment' | 'free';
  cancelUrl: string;
  children: React.ReactNode;
}

export default function CheckoutButton({ priceId, mode = 'payment', cancelUrl, children, ...props }: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();
  const { locale } = useClientTranslation();
  
  const handleCheckout = async () => {
    // Si l'utilisateur n'est pas connecté, on ouvre l'AuthDialog
    if (!isAuthenticated || !user) {
      setIsAuthDialogOpen(true);
      return;
    }

    if (mode === 'free') {
      router.push(`/${locale}/app`);
      return;
    }
    
    // Sinon, on procède à la redirection vers Stripe
    setIsLoading(true);
    setError(null);
    
    try {
      
      if (analytics) {
        logEvent(analytics, 'click_checkout_button');
      }

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          mode,
          cancelUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/${cancelUrl}`,
          userId: user.uid
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de la création de la session');
      }
      
      if (!data.url) {
        throw new Error('URL de redirection manquante');
      }
      
      // Redirection vers Stripe Checkout
      window.location.href = data.url;
    } catch (error: unknown) {
      console.log('error', error);
      const errorMessage = error instanceof Error ? error.message : 'Erreur lors de la redirection vers Stripe';
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button
        onClick={handleCheckout}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? 'Chargement...' : children}
      </Button>
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      
      <AuthDialog 
        isOpen={isAuthDialogOpen} 
        onOpenChange={(open) => {
          setIsAuthDialogOpen(open);
          // Si l'utilisateur vient de se connecter et ferme la popup, on lance le checkout
          if (!open && isAuthenticated && user) {
            handleCheckout();
          }
        }} 
      />
    </div>
  );
} 