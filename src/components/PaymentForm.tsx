"use client";

import { useState } from "react";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import getStripe from "@/lib/stripe-client";
import { usePayment } from "@/hooks/usePayment";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { createPaymentIntent, loading: paymentLoading, error: paymentError } = usePayment();

  const [amount, setAmount] = useState(2000); // 20€ en centimes
  const [currency] = useState("eur");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements || paymentLoading) {
      return;
    }

    setIsProcessing(true);
    setPaymentStatus(null);

    try {
      // 1. Créer un PaymentIntent
      const paymentIntent = await createPaymentIntent({
        amount,
        currency,
        description: "Paiement de test",
      });

      if (!paymentIntent) {
        setPaymentStatus("Erreur lors de la création du paiement");
        return;
      }

      // 2. Confirmer le paiement avec la carte
      const { error } = await stripe.confirmCardPayment(paymentIntent.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      });

      if (error) {
        setPaymentStatus(`Erreur: ${error.message}`);
      } else {
        setPaymentStatus("Paiement réussi !");
      }
    } catch {
      setPaymentStatus("Erreur lors du paiement");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white border rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Paiement par carte</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium mb-1">
            Montant (en centimes)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            min="100"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <p className="text-sm text-gray-500 mt-1">{amount / 100}€</p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Informations de carte</label>
          <div className="p-3 border border-gray-300 rounded-md">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={!stripe || isProcessing || paymentLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? "Traitement..." : `Payer ${amount / 100}€`}
        </button>
      </form>

      {paymentError && <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">{paymentError}</div>}

      {paymentStatus && (
        <div
          className={`mt-4 p-3 rounded-md ${
            paymentStatus.includes("réussi") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {paymentStatus}
        </div>
      )}
    </div>
  );
}

export default function PaymentForm() {
  const stripePromise = getStripe();

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
