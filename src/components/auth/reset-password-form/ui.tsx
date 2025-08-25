"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

interface ResetPasswordFormProps {
  onBack: () => void;
  onResetPasswordSubmit: (data: { email: string }) => Promise<void>;
  isLoading: boolean;
}

export function ResetPasswordForm({ onBack, onResetPasswordSubmit, isLoading }: ResetPasswordFormProps) {
  function handleResetPasswordSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email") as string,
    };
    onResetPasswordSubmit(data);
  }

  return (
    <div className="space-y-6">
      <Button variant="ghost" size="sm" className="w-fit" onClick={onBack}>
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour
      </Button>

      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Réinitialiser le mot de passe</h1>
        <p className="text-muted-foreground">Entrez votre adresse email pour recevoir un lien de réinitialisation.</p>
      </div>

      <form onSubmit={handleResetPasswordSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="reset-email">Email</Label>
          <Input
            id="reset-email"
            name="email"
            type="email"
            placeholder="votre@email.com"
            required
            disabled={isLoading}
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Envoi en cours..." : "Envoyer le lien de réinitialisation"}
        </Button>
      </form>
    </div>
  );
}
