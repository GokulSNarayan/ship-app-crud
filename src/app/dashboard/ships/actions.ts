'use server'

import { ship } from "@/db/schema";
import { EditFormValues } from "./components/edit-form";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function editShipData(data: EditFormValues, id: number) {
    try {
        await db.update(ship).set(data).where(eq(ship.shipId, id)).run();
        revalidatePath(`/dashboard/ships/${id}`)
        return { success: true , message: "Values updated!" }
    } catch (e) {
        console.error(e)
        return { success: false, message: "Error updating values!" }
    }
}