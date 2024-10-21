import { getTableName, sql, Table } from "drizzle-orm";
import { db, client } from ".";
import * as schema from "./schema";
import * as seeds from "./seeds";

async function resetTable(db: db, table: Table) {
  return db.execute(sql.raw(`TRUNCATE TABLE ${getTableName(table)} RESTART IDENTITY CASCADE`));
}

await resetTable(db, schema.ship);

await seeds.ship(db)
await client.end();