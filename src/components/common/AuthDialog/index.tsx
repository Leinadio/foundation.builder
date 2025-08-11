"use client";

import { useState } from "react";
import { AuthDialog as AuthDialogComponent } from "./components";
import { clientAuthServiceInstance } from "@/lib/di-container-client";

interface AuthDialogProps {
  children?: React.ReactNode;
}

export function AuthDialog({ children }: AuthDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenChange(open: boolean) {
    if (!open && isLoading) {
      return;
    }
    setIsOpen(open);
  }

  async function handleLogin(data: { email: string; password: string }) {
    setIsLoading(true);

    try {
      const user = await clientAuthServiceInstance.loginWithEmail(data.email, data.password);

      const isLoginFailed = !user;
      if (isLoginFailed) {
        console.error("Échec de la connexion");
        return;
      }

      console.log("Connexion réussie:", user);
      setIsOpen(false);
      return;
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      return;
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRegister(data: { name: string; email: string; password: string; confirmPassword: string }) {
    setIsLoading(true);

    const isPasswordMismatch = data.password !== data.confirmPassword;
    if (isPasswordMismatch) {
      console.error("Les mots de passe ne correspondent pas");
      setIsLoading(false);
      return;
    }

    try {
      const result = await clientAuthServiceInstance.registerWithEmail(data.email, data.password, data.name);

      const isRegistrationFailed = !result.user;
      if (isRegistrationFailed) {
        console.error("Échec de l'inscription");
        return;
      }

      console.log("Inscription réussie:", result);
      const needsEmailVerification = result.requiresVerification;
      if (needsEmailVerification) {
        console.log("Vérification d'email requise");
      }

      setIsOpen(false);
      return;
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      return;
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthDialogComponent
      open={isOpen}
      onOpenChange={handleOpenChange}
      onRegister={handleRegister}
      onLogin={handleLogin}
      isLoading={isLoading}
    >
      {children}
    </AuthDialogComponent>
  );
}
