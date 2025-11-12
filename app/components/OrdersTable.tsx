'use client'

import { ColumnDef } from "@tanstack/react-table";
import DataTable from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { StockData } from "../core/models/interfaces/StockData";
import { OrderData } from "../core/models/interfaces/OrderData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface OrderTableProps {
    orders: OrderData[]
}

const OrdersTable = ({ orders }: OrderTableProps) => {

    const columns: ColumnDef<StockData>[] = [
        {
            accessorKey: 'orderDate',
            cell: ({ row }) => {
                if (!row.getValue('orderDate')) return '';
                const date = new Date(row.getValue('orderDate'));
                return date.toLocaleDateString('en-GB');
            },
            header: ({ column }) => (
                <div className="flex items-center gap-2"><span>Order date</span> <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className="cursor-pointer"><ArrowUpDown className="h-4 w-4" /></Button></div>

            )
        },
        {
            accessorKey: 'quantity',
            header: ({ column }) => (
                <div className="flex items-center gap-2"><span>Quantity</span></div>
            )
        },
        {
            accessorKey: 'unitCost',
            cell: ({ row }) => `${row.getValue('unitCost')}€`,
            header: ({ column }) => (
                <div className="flex items-center gap-2"><span>Unit cost</span> <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className="cursor-pointer"><ArrowUpDown className="h-4 w-4" /></Button></div>
            )
        },
        {
            accessorKey: 'totalCost',
            cell: ({ row }) => `${(row.getValue('unitCost') as number) * (row.getValue('quantity') as number)}€`,
            header: ({ column }) => (
                <div className="flex items-center gap-2"><span>Total cost</span> <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className="cursor-pointer"><ArrowUpDown className="h-4 w-4" /></Button></div>
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
            header: ({ column }) => (
                <div className="flex items-center gap-2"><span>Status</span></div>
            )
        },
    ]


    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <h3>Orders</h3>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <DataTable columns={columns} data={orders} />
            </CardContent>
        </Card>
    )
}

export default OrdersTable