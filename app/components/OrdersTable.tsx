'use client'

import { ColumnDef } from "@tanstack/react-table";
import DataTable from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

const OrdersTable = () => {

    const columns: ColumnDef<any>[] = [
        {
            accessorKey: 'orderDate',
            cell: ({ row }) => {
                if (!row.getValue('orderDate')) return '';
                const date = new Date(row.getValue('orderDate'));
                return date.toLocaleDateString('en-GB');
            },
            header:({column})=>(
                <div className="flex items-center gap-2"><span>Order date</span> <Button variant='ghost' onClick={()=>column.toggleSorting(column.getIsSorted()==="asc")} className="cursor-pointer"><ArrowUpDown className="h-4 w-4" /></Button></div>
                
            )
        },
        {
            accessorKey: 'quantity',
            header: 'Quantity'
        },
        {
            accessorKey: 'unitCost',
            cell:({row})=>`${row.getValue('unitCost')}€`,
            header:({column})=>(
                <div className="flex items-center gap-2"><span>Unit cost</span> <Button variant='ghost' onClick={()=>column.toggleSorting(column.getIsSorted()==="asc")} className="cursor-pointer"><ArrowUpDown className="h-4 w-4" /></Button></div>
            )
        },
        {
            accessorKey: 'totalCost',
            cell:({row})=>`${row.getValue('totalCost')}€`,
            header:({column})=>(
                <div className="flex items-center gap-2"><span>Total cost</span> <Button variant='ghost' onClick={()=>column.toggleSorting(column.getIsSorted()==="asc")} className="cursor-pointer"><ArrowUpDown className="h-4 w-4" /></Button></div>
            )
        },
        {
            accessorKey: 'status',
            cell: ({ row }) => {
                const status = row.getValue('status') as string;
                const statusColors = {
                    planned: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
                    confirmed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
                    delivered: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                }

                return <span className={`px-2 py-1 font-semibold border rounded-md ${statusColors[status as keyof typeof statusColors]}`}>{status}</span>
            },
            header:({column})=>(
                <div className="flex items-center gap-2"><span>Status</span> <Button variant='ghost' onClick={()=>column.toggleSorting(column.getIsSorted()==="asc")} className="cursor-pointer"><ArrowUpDown className="h-4 w-4" /></Button></div>
            )
        },
    ]

    const rows = [
        {
            id: 'ORD-001',
            orderDate: '2024-11-15',
            quantity: 500,
            unitCost: 45.50,
            status: 'planned'
        },
        {
            id: 'ORD-002',
            orderDate: '2024-11-20',
            quantity: 750,
            unitCost: 42.00,
            status: 'planned'
        },
        {
            id: 'ORD-003',
            orderDate: '2024-12-01',
            quantity: 1000,
            unitCost: 43.25,
            status: 'confirmed'
        },
        {
            id: 'ORD-004',
            orderDate: '2024-12-15',
            quantity: 600,
            unitCost: 44.75,
            status: 'planned'
        },
        {
            id: 'ORD-005',
            orderDate: '2025-01-05',
            quantity: 850,
            unitCost: 41.50,
            status: 'planned'
        },
        {
            id: 'ORD-006',
            orderDate: '2025-01-20',
            quantity: 900,
            unitCost: 43.00,
            status: 'confirmed'
        },
        {
            id: 'ORD-007',
            orderDate: '2025-02-01',
            quantity: 550,
            unitCost: 45.00,
            status: 'planned'
        },
        {
            id: 'ORD-008',
            orderDate: '2025-02-15',
            quantity: 700,
            unitCost: 42.50,
            status: 'planned'
        },
        {
            id: 'ORD-009',
            orderDate: '2024-10-10',
            quantity: 800,
            unitCost: 44.00,
            status: 'delivered'
        },
        {
            id: 'ORD-010',
            orderDate: '2024-10-25',
            quantity: 650,
            unitCost: 43.50,
            status: 'delivered'
        },
        {
            id: 'ORD-011',
            orderDate: '2025-03-01',
            quantity: 920,
            unitCost: 41.75,
            status: 'planned'
        },
        {
            id: 'ORD-012',
            orderDate: '2025-03-15',
            quantity: 780,
            unitCost: 44.25,
            status: 'planned'
        }
    ];

    return (
        <DataTable columns={columns} data={rows} />
    )
}

export default OrdersTable