import { NextResponse } from "next/server";
import { paymentServiceInstance } from "@/core/server/di-container-server";

export async function POST(request: Request) {
  try {
    const { priceId, customerId, metadata } = await request.json();

    if (!priceId) {
      return NextResponse.json({ error: "ID du prix requis" }, { status: 400 });
    }

    if (!customerId) {
      return NextResponse.json({ error: "ID du client requis" }, { status: 400 });
    }

    const subscription = await paymentServiceInstance.createSubscription({
      priceId,
      customerId,
      metadata,
    });

    return NextResponse.json(subscription);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
