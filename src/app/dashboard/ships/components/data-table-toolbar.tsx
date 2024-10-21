"use client"

import { Table } from "@tanstack/react-table"
import { DataTableViewOptions } from "./data-table-view-options"
import { Input } from "@/components/ui/input"
import { PlusIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const router = useRouter()

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search by name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
      </div>
      <Button
        variant="outline"
        size="sm"
        className="mx-2 hidden h-8 lg:flex"
        onClick={() => router.push("/dashboard/ships/create")}
      >
        <PlusIcon className="mr-2 h-4 w-4" />
        Create
      </Button>

      <DataTableViewOptions table={table} />

    </div>
  )
}