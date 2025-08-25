"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type CheckoutButtonClientProps = {
  amount?: number;
  currency?: string;
  onCheckout: () => Promise<void>;
};

type FormState = {
  loading: boolean;
  error: string;
};

export function CheckoutButton({ amount, currency = "eur", onCheckout }: CheckoutButtonClientProps) {
  const [formState, setFormState] = useState<FormState>({
    loading: false,
    error: "",
  });

  async function handleCheckout() {
    setFormState({ loading: true, error: "" });
    try {
      await onCheckout();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Une erreur est survenue";
      setFormState({ loading: false, error: errorMessage });
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Checkout Stripe</h2>
      <Card>
        <CardHeader>
          <CardTitle>Checkout Stripe</CardTitle>
          <CardDescription>Cliquez pour être redirigé vers la page de paiement sécurisée</CardDescription>
        </CardHeader>
        <CardContent>
          {formState.error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{formState.error}</AlertDescription>
            </Alert>
          )}
          {amount && (
            <div className="mb-4 p-3 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-600">
                <strong>Montant:</strong> {amount} {currency.toUpperCase()}
              </p>
            </div>
          )}

          <Button onClick={handleCheckout} className="w-full" disabled={formState.loading}>
            {formState.loading ? "Redirection..." : "Payer maintenant"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
