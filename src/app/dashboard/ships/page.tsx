import { Typography } from "@/components/ui/typography";
import { db } from "@/db";
import { ship } from "@/db/schema";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";

export default async function Ships() {
    const data = await db.select().from(ship);

    return (
        <div className="mx-2 p-8">
            <Typography className="mb-2" variant="h3">Ships</Typography>
            <DataTable columns={columns} data={data} />
        </div>
    )
}