import { NextResponse } from "next/server";
import { paymentServiceInstance } from "@/core/server/di-container-server";

export async function POST(request: Request) {
  try {
    const { paymentIntentId } = await request.json();

    if (!paymentIntentId) {
      return NextResponse.json({ error: "PaymentIntent ID requis" }, { status: 400 });
    }

    const paymentIntent = await paymentServiceInstance.confirmPayment(paymentIntentId);

    return NextResponse.json(paymentIntent);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
