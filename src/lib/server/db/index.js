import { drizzle } from 'drizzle-orm/vercel-postgres';
import { createPool } from '@vercel/postgres';
import { POSTGRES_URL } from '$env/static/private';

const pool = createPool({ connectionString: POSTGRES_URL });
export const db = drizzle(pool);