"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AuthDialog as AuthDialogComponent } from "@/components/ui/auth-dialog";
import { clientAuthServiceInstance } from "@/core/client/di-container-client";

interface AuthDialogProps {
  children?: React.ReactNode;
}

export function AuthDialog({ children }: AuthDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function handleOpenChange(open: boolean) {
    const shouldPreventClose = !open && isLoading;
    if (shouldPreventClose) {
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
      router.push("/app");
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
        toast.success("Email de vérification envoyé", {
          description: "Vérifiez votre boîte email pour activer votre compte.",
        });
        setIsOpen(false);
        return;
      }

      setIsOpen(false);
      router.push("/app");
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
      setIsOpen(false);
      router.push("/app");
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
      setIsOpen(false);
      router.push("/app");
      return;
    } catch (error) {
      console.error("Erreur lors de la connexion GitHub:", error);
      return;
    } finally {
      setIsLoading(false);
    }
  }

  async function handleResetPassword(data: { email: string }) {
    setIsLoading(true);

    try {
      await clientAuthServiceInstance.forgotPassword(data.email);
      console.log("Email de réinitialisation envoyé avec succès");
      toast.success("Email de réinitialisation envoyé", {
        description: "Vérifiez votre boîte email pour réinitialiser votre mot de passe.",
      });
      return;
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email de réinitialisation:", error);
      toast.error("Erreur", {
        description: "Impossible d'envoyer l'email de réinitialisation. Veuillez réessayer.",
      });
      return;
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthDialogComponent
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
      onRegister={handleRegister}
      onLogin={handleLogin}
      onGoogleAuth={handleGoogleAuth}
      onGithubAuth={handleGithubAuth}
      onResetPassword={handleResetPassword}
      isLoading={isLoading}
    >
      {children}
    </AuthDialogComponent>
  );
}
