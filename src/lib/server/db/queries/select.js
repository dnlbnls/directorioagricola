import { db } from '$lib/server/db/index.js';
import { companiesTable } from '$lib/server/db/schema.js';
import { eq, and} from 'drizzle-orm';

export async function getCompanyBySlug(slug) {
  return await db
  .select()
  .from(companiesTable)
  .where(eq(companiesTable.slug, slug));
}

export async function fetchCompanies({
  category,
  state,
  location,
  page = 1,
  pageSize = 30,
}) {
  try {
    const companies = await db
      .select()
      .from(companiesTable)
      .where(
        and(
          category ? eq(companiesTable.category, category) : undefined,
          state ? eq(companiesTable.mexicanstate, state) : undefined,
          location ? eq(companiesTable.location, location) : undefined
        )
      )
      .limit(pageSize)
      .offset((page - 1) * pageSize);
    return companies;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Database error');
  }
}