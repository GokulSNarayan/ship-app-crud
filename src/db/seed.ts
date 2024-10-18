import { getTableName, sql, Table } from "drizzle-orm";
import { db } from ".";
import * as schema from "./schema";
import * as seeds from "./seeds";

async function resetTable(db: db, table: Table) {
    return db.run(sql.raw(`DELETE FROM ${getTableName(table)}`))
  }
// 
  for (const table of [schema.ship, schema.user]) {
    await resetTable(db, table);
  }

await seeds.ship(db)