"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ChangePasswordForm } from "@/components/auth/ChangePasswordForm";

export function ChangePasswordBlock() {
  return (
    <div className="min-h-screen flex">
      {/* Bouton retour en haut à gauche */}
      <div className="absolute top-6 left-6 z-10">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Accueil
          </Button>
        </Link>
      </div>

      {/* Colonne de gauche - Formulaire de changement de mot de passe */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <ChangePasswordForm />
        </div>
      </div>

      {/* Colonne de droite - Image et texte */}
      <div className="w-1/2 bg-muted flex items-center justify-center p-8">
        <div className="text-center space-y-6 max-w-md">
          <div className="relative">
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <circle cx="12" cy="16" r="1" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Sécurisez votre compte</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {"Choisissez un mot de passe fort pour protéger votre compte et vos données."}
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20,6 9,17 4,12" />
              </svg>
              <span>{"Minimum 8 caractères requis"}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>{"Connexion sécurisée garantie"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
