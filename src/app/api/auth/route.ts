import { NextResponse } from "next/server";
import { authServiceInstance } from "@/lib/di-container-server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const user = await authServiceInstance.loginWithEmail(email, password);
    if (!user) {
      return NextResponse.json({ error: "Identifiants invalides" }, { status: 401 });
    }
    return NextResponse.json(user);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
