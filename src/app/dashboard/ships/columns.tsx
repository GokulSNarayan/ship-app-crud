"use client"
 
import { type Ship } from "@/db/schema"
import { ColumnDef } from "@tanstack/react-table"
import { DataTableRowActions } from "./data-table-row-actions"

export const columns: ColumnDef<Ship>[] = [
    {
        accessorKey:"shipId",
        header: "Id",
    },
    {
        accessorKey:"name",
        header: "Name",
    },
    {
        accessorKey:"length",
        header: "Length",
    },
    {
        accessorKey:"width",
        header: "Width",
    },
    {
        accessorKey:"code",
        header: "Code",
    },
    {
        accessorKey:"lastUpdated",
        header: "Last Updated",
    },
    {
        accessorKey:"updatedBy",
        header: "Updated By",
    },
    {
        id: "actions",
        cell: ({row}) => <DataTableRowActions row={row} />
    }
]