import { betterAuth } from 'better-auth'
import { tanstackStartCookies } from 'better-auth/tanstack-start'
import { db } from '../drizzle'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg"
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [tanstackStartCookies()],
})
