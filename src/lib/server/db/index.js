// import { drizzle } from 'drizzle-orm/vercel-postgres';
import { drizzle } from "drizzle-orm/neon-http";
// import { createPool } from '@vercel/postgres';
import { neon } from "@neondatabase/serverless";
import { NEON_POSTGRES_URL } from '$env/static/private';

// const pool = createPool({ connectionString: POSTGRES_URL });
// export const db = drizzle(pool);

const sql = neon(NEON_POSTGRES_URL);
export const db = drizzle(sql);