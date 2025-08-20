"use client";

import { useState } from "react";
import { toast } from "sonner";
import { authServiceInstance } from "@/core/client/di-container-client";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm/ResetPasswordForm";

interface ResetPasswordFormContainerProps {
  onBack: () => void;
}

export function ResetPasswordFormContainer({ onBack }: ResetPasswordFormContainerProps) {
  const [isLoading, setIsLoading] = useState(false);

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

  return <ResetPasswordForm onBack={onBack} onResetPasswordSubmit={handleResetPasswordSubmit} isLoading={isLoading} />;
}

// Export pour maintenir la compatibilité
export { ResetPasswordFormContainer as ResetPasswordForm };
