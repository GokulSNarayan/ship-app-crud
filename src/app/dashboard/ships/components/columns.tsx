"use client"
 
import { type Ship } from "@/db/schema"
import { ColumnDef } from "@tanstack/react-table"
import { DataTableRowActions } from "./data-table-row-actions"
import { DataTableColumnHeader } from "./data-table-column-header"

export const columns: ColumnDef<Ship>[] = [
    {
        accessorKey:"shipId",
        header: ({column}) =>(
            <DataTableColumnHeader column={column} title="Id"/>
        ),
    },
    {
        accessorKey:"name",
        header: ({column}) =>(
            <DataTableColumnHeader column={column} title="Name"/>
        ),
    },
    {
        accessorKey:"length",
        header: ({column}) =>(
            <DataTableColumnHeader column={column} title="Length"/>
        ),
    },
    {
        accessorKey:"width",
        header: ({column}) =>(
            <DataTableColumnHeader column={column} title="Width"/>
        ),
    },
    {
        accessorKey:"code",
        header: ({column}) =>(
            <DataTableColumnHeader column={column} title="Code"/>
        ),
    },
    {
        accessorKey:"lastUpdated",
        header: ({column}) =>(
            <DataTableColumnHeader column={column} title="Last Updated"/>
        ),
    },
    {
        accessorKey:"updatedBy",
        header: ({column}) =>(
            <DataTableColumnHeader column={column} title="Updated By"/>
        ),
    },
    {
        id: "actions",
        cell: ({row}) => <DataTableRowActions row={row} />
    }
]