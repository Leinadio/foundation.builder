"use client";

import { useState } from "react";
import { toast } from "sonner";
import { authServiceInstance } from "@/core/client/di-container-client";
import { ResetPasswordForm } from "@/components/ui/reset-password-form";
import { useRouter } from "next/navigation";

export function ResetPasswordFormContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleResetPasswordSubmit(data: { email: string }) {
    setIsLoading(true);

    try {
      await authServiceInstance.forgotPassword(data.email);
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

  function handleBack() {
    router.push("/sign-in");
  }

  return (
    <ResetPasswordForm onBack={handleBack} onResetPasswordSubmit={handleResetPasswordSubmit} isLoading={isLoading} />
  );
}

// Export pour maintenir la compatibilité
export { ResetPasswordFormContainer as ResetPasswordForm };
