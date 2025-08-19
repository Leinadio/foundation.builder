"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { RegisterForm } from "./RegisterForm";

export function SignUpBlock() {
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

      {/* Colonne de gauche - Formulaire d'inscription */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <RegisterForm />
        </div>
      </div>

      {/* Colonne de droite - Image et texte */}
      <div className="w-1/2 bg-muted flex items-center justify-center p-8">
        <div className="text-center space-y-6 max-w-md">
          <div className="relative">
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{"Rejoignez des milliers d'utilisateurs"}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {"Découvrez une nouvelle façon de gérer vos projets et boostez votre productivité dès aujourd'hui."}
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20,6 9,17 4,12" />
              </svg>
              <span>{"Configuration en moins de 2 minutes"}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>{"Sécurisé et confidentiel"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
