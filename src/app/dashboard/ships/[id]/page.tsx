import { ship } from "@/db/schema";
import { EditForm } from "../components/edit-form";
import { db } from "@/db";
import { eq } from "drizzle-orm";

export default async function ShipEdit({ params }: { params: { id: string } }) {
    const data = await db.select().from(ship).where(eq(ship.shipId, Number(params.id)));
    return (
        <div className="m-2 p-4 min-w-max">
            <h1>Ship Edit</h1>
            <EditForm data={data[0]} />
        </div>
    )
}