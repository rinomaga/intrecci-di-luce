import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy_key_for_build');

export async function POST(req) {
  try {
    const { productId, productName, productPrice, imageUrl } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: productName,
              images: imageUrl ? [`${process.env.NEXT_PUBLIC_SITE_URL}${imageUrl}`] : [],
            },
            unit_amount: Math.round(productPrice * 100), // convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/shop`,
      shipping_address_collection: {
        allowed_countries: ['IT', 'FR', 'DE', 'ES', 'GB', 'US'], // Add others if needed
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 1000, currency: 'eur' },
            display_name: 'Spedizione Italia',
            delivery_estimate: { minimum: { unit: 'business_day', value: 7 }, maximum: { unit: 'business_day', value: 10 } },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 2000, currency: 'eur' },
            display_name: 'Spedizione Estero',
            delivery_estimate: { minimum: { unit: 'business_day', value: 10 }, maximum: { unit: 'business_day', value: 15 } },
          },
        },
      ],
      metadata: {
        productId: productId
      }
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
