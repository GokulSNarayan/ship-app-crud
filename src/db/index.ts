import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { migrate } from 'drizzle-orm/libsql/migrator';
import config from '../../drizzle.config';

const client = createClient({ url: process.env.DB_FILE_NAME! });
export const db = drizzle({ client });

export type db = typeof db;

migrate(db, { migrationsFolder: config.out! });