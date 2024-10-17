import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { migrate } from 'drizzle-orm/libsql/migrator';

const client = createClient({ url: process.env.DB_FILE_NAME! });
export const db = drizzle({ client });

migrate(db, { migrationsFolder: 'drizzle' });