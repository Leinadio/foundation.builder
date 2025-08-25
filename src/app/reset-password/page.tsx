import { ChangePasswordSection } from "@/blocks/auth";
import { authServiceInstance } from "@/core/server/di-container-server";
import { redirect } from "next/navigation";

interface ResetPasswordPageProps {
  searchParams: {
    token?: string;
    error?: string;
  };
}

export default async function ResetPasswordPage({ searchParams }: ResetPasswordPageProps) {
  const { token, error } = await searchParams;
  const session = await authServiceInstance.getSession();

  if (session) {
    redirect("/app");
  }

  // Si il y a une erreur dans les paramètres, on peut la gérer ici
  if (error) {
    // Pour l'instant, on affiche quand même le formulaire
    // On pourrait ajouter une logique d'affichage d'erreur plus tard
  }

  // Si il n'y a pas de token, on redirige vers la page de demande de réinitialisation
  if (!token) {
    redirect("/forgot-password");
  }

  return <ChangePasswordSection />;
}
