import { env } from './lib/t3env/server'

const SITE_URL = env.VERCEL_URL ? `https://${env.VERCEL_URL}` : 'http://localhost:3000'

export const TRIAL_BRO = {
  url: SITE_URL,
  title: 'Trial Bro - Premium AI Tools at Discounted Rates',
  description:
    "Get Premium AI Tools like ChatGPT Plus, Claude Pro, and more at discounted rates. Secure, reliable, and instant access to the world's most powerful AI tools.",
  shortDescription:
    'Get access to the best AI tools at a fraction of the price.',
}
