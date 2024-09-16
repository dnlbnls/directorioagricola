import { error } from '@sveltejs/kit';
import { getCompanyBySlug } from '$lib/server/db/queries/select.js';


export async function load({ params }) {
  const { slug } = params;
  const company = await getCompanyBySlug(slug);

  if (!company) {
    error(404, 'Not found');
  }

  return { company };
}