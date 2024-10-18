import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user",{
    id: int('id').primaryKey({ autoIncrement: true }),
    name: text('first_name').notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
    lastUpdated: text('last_updated').notNull(),
})