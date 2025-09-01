import { NextResponse } from "next/server";
import { paymentServiceInstance } from "@/core/server/di-container-server";

export async function POST(request: Request) {
  try {
    const { priceId, successUrl, cancelUrl, metadata } = await request.json();

    if (!priceId) {
      return NextResponse.json({ error: "ID du prix requis" }, { status: 400 });
    }

    if (!successUrl || !cancelUrl) {
      return NextResponse.json({ error: "URLs de succès et d'annulation requises" }, { status: 400 });
    }

    const session = await paymentServiceInstance.createSubscriptionSession({
      priceId,
      successUrl,
      cancelUrl,
      metadata,
    });

    return NextResponse.json(session);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
