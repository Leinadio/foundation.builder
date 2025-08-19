"use client";

import { useState } from "react";
import { clientAuthServiceInstance } from "@/lib/di-container-client";
import { RegisterForm } from "./RegisterForm";

export function RegisterFormContainer() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleRegisterSubmit(data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) {
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

      return;
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      return;
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGoogleAuth() {
    setIsLoading(true);

    try {
      const user = await clientAuthServiceInstance.loginWithGoogle();

      const isLoginFailed = !user;
      if (isLoginFailed) {
        console.error("Échec de la connexion Google");
        return;
      }

      console.log("Connexion Google réussie:", user);
      return;
    } catch (error) {
      console.error("Erreur lors de la connexion Google:", error);
      return;
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGithubAuth() {
    setIsLoading(true);

    try {
      const user = await clientAuthServiceInstance.loginWithGithub();

      const isLoginFailed = !user;
      if (isLoginFailed) {
        console.error("Échec de la connexion GitHub");
        return;
      }

      console.log("Connexion GitHub réussie:", user);
      return;
    } catch (error) {
      console.error("Erreur lors de la connexion GitHub:", error);
      return;
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <RegisterForm
      onRegisterSubmit={handleRegisterSubmit}
      onGoogleAuth={handleGoogleAuth}
      onGithubAuth={handleGithubAuth}
      isLoading={isLoading}
    />
  );
}

// Export pour maintenir la compatibilité
export { RegisterFormContainer as RegisterForm };
