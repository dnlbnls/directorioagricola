import { json } from '@sveltejs/kit';
import { fetchCompanies } from '$lib/server/db/queries/select.js';


export async function GET({ url }) {

  const page = parseInt(url.searchParams.get('page')) || undefined;
  const category = url.searchParams.get('category');
  const state = url.searchParams.get('state');
  const location = url.searchParams.get('location');

  try {

    const companies = await fetchCompanies({
      category,
      state,
      location,
      page
    });

    return json(companies);

  } catch (error) {
    console.error(error);
    return json({ error: error }, { status: 500 });
  }

}