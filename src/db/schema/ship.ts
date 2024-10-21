import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";


export const ship = pgTable("ship", {
  shipId: integer('id').primaryKey().generatedByDefaultAsIdentity(),
  name: varchar('name').notNull(),
  width: integer('width').notNull(),
  code: varchar('code').notNull(),
  length: integer('length').notNull(),
  lastUpdated: timestamp('last_updated').defaultNow().$onUpdate(() => new Date()),
});

export type Ship = typeof ship.$inferSelect;