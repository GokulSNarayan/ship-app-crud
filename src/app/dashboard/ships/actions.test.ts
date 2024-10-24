import { beforeAll, describe, expect, test, vi } from "vitest";
import { createShip, editShipData, deleteShip } from "./actions";
import { CreateFormSchema, EditFormSchema } from "./_components/types";


    describe("Test actions for ships", () => {
        beforeAll(() => {
            vi.mock('./actions', () => ({
                createShip: vi.fn(async () => ({ success: true, message: "Record created!" })),
                editShipData: vi.fn(async () => ({ success: true, message: "Record updated!" })),
                deleteShip: vi.fn(async () => ({ success: true, message: "Record deleted!" }))
            }))
        })

        test("createShip", async () => {
            const data: CreateFormSchema = { name: "Test Ship", length: 100, width: 20, code: "AAAA-1111-A1" };
            const result = await createShip(data);
            expect(result.success).toBe(true);
            expect(result.message).toBe("Record created!")
        })

        test("editShipData", async () => {
            const data: EditFormSchema = { name: "Updated Ship", length: 120, width: 25, code: "BBBB-2222-B2" };
            const id = 1;
            const result = await editShipData(data, id);
            expect(result.success).toBe(true);
            expect(result.message).toBe("Record updated!")
        })

        test("deleteShip", async () => {
            const id = 1;
            const result = await deleteShip(id);
            expect(result.success).toBe(true);
            expect(result.message).toBe("Record deleted!")
        })
    })