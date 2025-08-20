"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { clientAuthServiceInstance } from "@/lib/di-container-client";
import { RegisterForm } from "./RegisterForm";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Mail } from "lucide-react";

export function RegisterFormContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [showVerificationBanner, setShowVerificationBanner] = useState(false);
  const router = useRouter();

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
      toast.error("Erreur de validation", {
        description: "Les mots de passe ne correspondent pas.",
      });
      setIsLoading(false);
      return;
    }

    try {
      const result = await clientAuthServiceInstance.registerWithEmail(data.email, data.password, data.name);

      const isRegistrationFailed = !result.user;
      if (isRegistrationFailed) {
        console.error("Échec de l'inscription");
        toast.error("Échec de l'inscription", {
          description: "Impossible de créer votre compte. Veuillez réessayer.",
        });
        return;
      }

      console.log("Inscription réussie:", result);
      const needsEmailVerification = result.requiresVerification;
      if (needsEmailVerification) {
        console.log("Vérification d'email requise");
        setShowVerificationBanner(true);
        return;
      }

      toast.success("Inscription réussie", {
        description: "Redirection en cours...",
      });
      router.push("/app");
      return;
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      toast.error("Erreur d'inscription", {
        description: "Une erreur inattendue s'est produite. Veuillez réessayer.",
      });
      return;
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGoogleAuth() {
    setIsLoading(true);

    try {
      await clientAuthServiceInstance.loginWithGoogle();
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
      await clientAuthServiceInstance.loginWithGithub();
      return;
    } catch (error) {
      console.error("Erreur lors de la connexion GitHub:", error);
      return;
    } finally {
      setIsLoading(false);
    }
  }

  const shouldShowVerificationBanner = showVerificationBanner;
  if (shouldShowVerificationBanner) {
    return (
      <div className="space-y-6">
        <Alert>
          <Mail className="h-4 w-4" />
          <AlertTitle>Email de vérification envoyé</AlertTitle>
          <AlertDescription>
            {
              "Nous avons envoyé un email de vérification à votre adresse. Veuillez cliquer sur le lien dans l'email pour activer votre compte."
            }
          </AlertDescription>
        </Alert>
        <div className="text-center">
          <button
            type="button"
            className="text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
            onClick={() => setShowVerificationBanner(false)}
          >
            Retour au formulaire
          </button>
        </div>
      </div>
    );
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
