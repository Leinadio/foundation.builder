"use client";

import { useState } from "react";
import { toast } from "sonner";
import { authServiceInstance } from "@/core/client/di-container-client";
import { ChangePasswordForm } from "@/components/ui/change-password-form";
import { useRouter, useSearchParams } from "next/navigation";

export function ChangePasswordFormContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  async function handleChangePasswordSubmit(data: { password: string; confirmPassword: string }) {
    setError("");

    if (!token) {
      setError("Token de réinitialisation manquant ou invalide.");
      return;
    }

    if (data.password !== data.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    if (data.password.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères.");
      return;
    }

    setIsLoading(true);

    try {
      const success = await authServiceInstance.resetPassword(token, data.password);

      if (!success) {
        setError("Token invalide ou expiré. Veuillez demander un nouveau lien de réinitialisation.");
        return;
      }

      console.log("Mot de passe changé avec succès");
      toast.success("Mot de passe changé", {
        description: "Votre mot de passe a été changé avec succès. Vous pouvez maintenant vous connecter.",
      });

      // Rediriger vers la page de connexion
      router.push("/sign-in");
      return;
    } catch (error) {
      console.error("Erreur lors du changement de mot de passe:", error);
      setError("Erreur lors du changement de mot de passe. Veuillez réessayer.");
      return;
    } finally {
      setIsLoading(false);
    }
  }

  function handleBack() {
    router.push("/sign-in");
  }

  return (
    <ChangePasswordForm
      onBack={handleBack}
      onChangePasswordSubmit={handleChangePasswordSubmit}
      isLoading={isLoading}
      error={error}
    />
  );
}

// Export pour maintenir la compatibilité
export { ChangePasswordFormContainer as ChangePasswordForm };
