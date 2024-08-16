'use client';

import { Account } from '@/actions/accounts';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"

export const columns: ColumnDef<Account>[] = [
	{
		accessorKey: 'lastName',
		header: 'Last Name',
	},
	{
		accessorKey: 'firstName',
		header: 'First Name',
	},
];

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
  }: DataTableProps<TData, TValue>) {
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    })
