import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/core/server/repositories/better-auth/config";

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const token = url.searchParams.get("token");

    if (!token) {
      return NextResponse.redirect(new URL("/verify-email?error=invalid_token", request.url));
    }

    // Vérifier le token avec Better-Auth
    const verificationResult = await auth.api.verifyEmail({
      query: { token },
      headers: request.headers,
    });

    if (verificationResult) {
      // Rediriger vers notre page de succès
      return NextResponse.redirect(new URL(`/verify-email?token=${token}&success=true`, request.url));
    } else {
      // Rediriger vers notre page d'erreur
      return NextResponse.redirect(new URL("/verify-email?error=verification_failed", request.url));
    }
  } catch (error) {
    console.error("Erreur lors de la vérification d'email:", error);
    return NextResponse.redirect(new URL("/verify-email?error=server_error", request.url));
  }
}
