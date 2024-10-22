'use server'

import { ship } from "@/db/schema";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { CreateFormSchema, EditFormSchema } from "./_components/types";


export async function createShip(data: CreateFormSchema) {
    try {
        await db.insert(ship).values(data);
        revalidatePath("/dashboard/ships")
        return { success: true, message: "Record created!" }
    } catch (e) {
        console.error(e)
        return { success: false, message: "Error creating record!" }
    }
}

export async function editShipData(data: EditFormSchema, id: number) {
    try {
        await db.update(ship).set(data).where(eq(ship.shipId, id));
        revalidatePath(`/dashboard/ships/${id}`)
        return { success: true , message: "Record updated!" }
    } catch (e) {
        console.error(e)
        return { success: false, message: "Error updating record!" }
    }
}

export async function deleteShip(id: number) {
    try {
        await db.delete(ship).where(eq(ship.shipId, id));
        revalidatePath("/dashboard/ships")
        return { success: true, message: "Record deleted!" }
    } catch (e) {
        console.error(e)
        return { success: false, message: "Error deleting record!" }
    }
}