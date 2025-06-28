import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { userServiceInstance } from "@/lib/di-container";

interface RouteParams {
  params: {
    id: string;
  };
}

export async function GET(_: NextApiRequest, { params }: RouteParams): Promise<NextResponse> {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "ID utilisateur requis" }, { status: 400 });
    }

    const user = await userServiceInstance.getUser(id);

    if (!user) {
      return NextResponse.json({ error: "Utilisateur non trouvé" }, { status: 404 });
    }

    return NextResponse.json({ message: "Utilisateur récupéré avec succès" }, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la récupération de l'utilisateur:", error);
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 });
  }
}
