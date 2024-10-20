import { db } from "@/db";
import { ship } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const data = await db.select().from(ship).where(eq(ship.shipId, Number(id)))
    return new Response(JSON.stringify(data))
}