import { fetchCompanies } from '$lib/server/db/queries/select.js';

export async function load() {
  const companies = await fetchCompanies({});
  return { companies };
}