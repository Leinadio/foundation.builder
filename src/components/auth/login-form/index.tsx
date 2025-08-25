"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authServiceInstance } from "@/core/client/di-container-client";
import { LoginForm } from "@/components/auth/login-form/ui";

export function LoginFormContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleLoginSubmit(data: { email: string; password: string }) {
    setIsLoading(true);

    try {
      const user = await authServiceInstance.loginWithEmail(data.email, data.password);

      const isLoginFailed = !user;
      if (isLoginFailed) {
        console.error("Échec de la connexion");
        toast.error("Échec de la connexion", {
          description: "Vérifiez vos identifiants et réessayez.",
        });
        return;
      }

      console.log("Connexion réussie:", user);
      toast.success("Connexion réussie", {
        description: "Redirection en cours...",
      });
      router.push("/app");
      return;
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      toast.error("Erreur de connexion", {
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
      await authServiceInstance.loginWithGoogle();
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
      await authServiceInstance.loginWithGithub();
      return;
    } catch (error) {
      console.error("Erreur lors de la connexion GitHub:", error);
      return;
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <LoginForm
      onLoginSubmit={handleLoginSubmit}
      onGoogleAuth={handleGoogleAuth}
      onGithubAuth={handleGithubAuth}
      isLoading={isLoading}
    />
  );
}

// Export pour maintenir la compatibilité
export { LoginFormContainer as LoginForm };
