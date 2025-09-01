import { NextResponse } from "next/server";
import { paymentServiceInstance } from "@/core/server/di-container-server";

export async function GET({ params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const subscription = await paymentServiceInstance.retrieveSubscription(id);

    if (!subscription) {
      return NextResponse.json({ error: "Abonnement non trouvé" }, { status: 404 });
    }

    return NextResponse.json(subscription);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE({ params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const subscription = await paymentServiceInstance.cancelSubscription(id);
    return NextResponse.json(subscription);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
