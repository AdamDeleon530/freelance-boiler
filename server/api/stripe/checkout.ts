// import Stripe from 'stripe'
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2025-03-31.basil',
// })

// export default defineEventHandler(async (event) => {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [{
//       price_data: {
//         currency: 'usd',
//         product_data: {
//           name: 'Freelance Starter Plan',
//         },
//         unit_amount: 5000, // $50.00
//       },
//       quantity: 1,
//     }],
//     mode: 'payment',
//     success_url: 'http://localhost:3000/success',
//     cancel_url: 'http://localhost:3000/cancel',
//   })
//   return { id: session.id }
// })
