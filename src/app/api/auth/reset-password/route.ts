import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/core/server/repositories/better-auth/config";

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const token = url.searchParams.get("token");

    if (!token) {
      return NextResponse.redirect(new URL("/reset-password?error=invalid_token", request.url));
    }

    // Rediriger vers la page de changement de mot de passe avec le token
    return NextResponse.redirect(new URL(`/reset-password?token=${token}`, request.url));
  } catch (error) {
    console.error("Erreur lors du traitement du token de réinitialisation:", error);
    return NextResponse.redirect(new URL("/reset-password?error=server_error", request.url));
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { token, password } = body;
    console.log("token", token);
    console.log("password", password);

    if (!token || !password) {
      return NextResponse.json({ error: "Token et mot de passe requis" }, { status: 400 });
    }

    // Réinitialiser le mot de passe avec Better-Auth
    const result = await auth.api.resetPassword({
      body: { newPassword: password, token },
      headers: request.headers,
    });

    if (result) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: "Token invalide ou expiré" }, { status: 400 });
    }
  } catch (error) {
    console.error("Erreur lors de la réinitialisation du mot de passe:", error);
    return NextResponse.json({ error: "Erreur serveur lors de la réinitialisation" }, { status: 500 });
  }
}
