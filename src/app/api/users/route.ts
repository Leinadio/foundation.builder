import { userServiceInstance } from "@/lib/di-container-server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await userServiceInstance.getAllUsers();
    return NextResponse.json(users);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await userServiceInstance.createUser(data);
    return NextResponse.json({ message: "Utilisateur créé avec succès" }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
