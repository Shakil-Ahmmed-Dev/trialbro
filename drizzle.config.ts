import { env } from '@/lib/t3env/server'
import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: ['.env.local', '.env'] })

export default defineConfig({
  out: './drizzle',
  schema: ['./src/lib/drizzle/schemas/schema.ts', './src/lib/drizzle/schemas/auth-schema.ts'],
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
