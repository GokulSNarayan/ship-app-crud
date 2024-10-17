import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const shipsTable = sqliteTable("ships", {
  shipId: int('ship_id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  length: int('length').notNull(),
  width: int('width').notNull(),
  code: text('code').notNull(),
  lastUpdated: text('last_updated').notNull(),
  updatedBy: int('updated_by').notNull(),
});