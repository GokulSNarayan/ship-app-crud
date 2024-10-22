import { Typography } from "@/components/ui/typography";
import { db } from "@/db";
import { ship } from "@/db/schema";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
export const dynamic = 'force-dynamic';

export default async function Ships() {
    const data = await db.select().from(ship);

    if (!data) {
        return (
            <div className="mx-2 p-8">
                <Typography className="mb-2" variant="h3">Ships</Typography>
                <Typography variant="h3">No ships found</Typography>
            </div>
        )
    }


    return (
        <div className="mx-2 p-8">
            <Typography className="mb-2" variant="h3">Ships</Typography>
            <DataTable columns={columns} data={data} />
        </div>
    )
}