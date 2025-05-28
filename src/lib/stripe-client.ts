"use client";

import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    const key = process.env.STRIPE_PUBLISHABLE_KEY;
    if (!key) {
      return Promise.reject(new Error('Stripe configuration error'));
    }
    
    console.log('Initializing Stripe with key:', key.substring(0, 8) + '...');
    stripePromise = loadStripe(key);
  }
  return stripePromise;
}; 