export type PaymentIntent = {
  id: string;
  clientSecret: string;
  amount: number;
  currency: string;
  status: string;
  metadata?: Record<string, string>;
};

export type PaymentRequest = {
  amount: number;
  currency: string;
  description?: string;
  metadata?: Record<string, string>;
};

export type PaymentSession = {
  id: string;
  url: string;
  amount: number;
  currency: string;
  status: string;
  metadata?: Record<string, string>;
};

export type CreateSessionRequest = {
  priceId?: string;
  amount?: number;
  currency?: string;
  successUrl: string;
  cancelUrl: string;
  metadata?: Record<string, string>;
};

export type Subscription = {
  id: string;
  status: string;
  currentPeriodStart: number;
  currentPeriodEnd: number;
  cancelAtPeriodEnd: boolean;
  metadata?: Record<string, string>;
};

export type CreateSubscriptionRequest = {
  priceId: string;
  customerId?: string;
  metadata?: Record<string, string>;
};

export type CreateSubscriptionSessionRequest = {
  priceId: string;
  successUrl: string;
  cancelUrl: string;
  metadata?: Record<string, string>;
};

export function isValidPaymentRequest(request: PaymentRequest): boolean {
  return request.amount > 0 && request.currency.length === 3;
}
