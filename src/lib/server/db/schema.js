import { pgTable, serial, varchar, numeric, integer } from 'drizzle-orm/pg-core';

export const companiesTable = pgTable('companiesorder', {
  id: serial('id').primaryKey().notNull(),
  clee: varchar('clee', 255),
  logo: varchar('logo', 255),
  name: varchar('name', 500).notNull(),
  employees: varchar('employees', 255),
  location: varchar('location', 255),
  mexicanstate: varchar('mexicanstate', 255),
  category: varchar('category', 255),
  subcategory: varchar('subcategory', 255),
  websiteurl: varchar('websiteurl', 255),
  address: varchar('address', 500),
  latitude: numeric('latitude', { precision: 12, scale: 8 }),
  longitude: numeric('longitude', { precision: 12, scale: 8 }),
  slug: varchar('slug', 500),
  order: integer('order')
});