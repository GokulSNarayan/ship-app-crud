import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const userTable = sqliteTable("users",{
    userId: int('user_id').primaryKey({ autoIncrement: true }),
    email: text('email').notNull(),
    password: text('password').notNull(),
    name: text('first_name').notNull(),
    userName: text('user_name').notNull(),
    lastUpdated: text('last_updated').notNull(),
})