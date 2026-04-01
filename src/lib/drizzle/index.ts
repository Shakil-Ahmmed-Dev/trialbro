import { drizzle } from 'drizzle-orm/neon-serverless'

import * as schema from './schemas/schema.ts'
import { env } from '@/lib/t3env/server.ts'

export const db = drizzle(env.DATABASE_URL, { schema })
