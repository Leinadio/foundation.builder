"use client";

import { useState } from "react";
import { clientAuthServiceInstance } from "@/lib/di-container-client";
import { ResetPasswordForm } from "./ResetPasswordForm";

interface ResetPasswordFormContainerProps {
  onBack: () => void;
}

export function ResetPasswordFormContainer({ onBack }: ResetPasswordFormContainerProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleResetPasswordSubmit(data: { email: string }) {
    setIsLoading(true);

    try {
      await clientAuthServiceInstance.forgotPassword(data.email);
      console.log("Email de réinitialisation envoyé avec succès");
      return;
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email de réinitialisation:", error);
      return;
    } finally {
      setIsLoading(false);
    }
  }

  return <ResetPasswordForm onBack={onBack} onResetPasswordSubmit={handleResetPasswordSubmit} isLoading={isLoading} />;
}

// Export pour maintenir la compatibilité
export { ResetPasswordFormContainer as ResetPasswordForm };
