import { NextResponse } from "next/server";
import { paymentServiceInstance } from "@/core/server/di-container-server";

export async function POST(request: Request) {
  try {
    const { amount, currency, description, metadata } = await request.json();

    if (!amount || !currency) {
      return NextResponse.json({ error: "Amount et currency sont requis" }, { status: 400 });
    }

    const paymentIntent = await paymentServiceInstance.createPaymentIntent({
      amount,
      currency,
      description,
      metadata,
    });

    return NextResponse.json(paymentIntent);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
