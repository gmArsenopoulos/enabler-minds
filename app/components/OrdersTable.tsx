'use client'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const OrdersTable = () => {
    const columns: GridColDef[] = [
        {
            field: 'orderDate',
            headerName: 'Ordered at',
            type: 'date',
            valueGetter: (value) => {
                const date = new Date(value);
                return date
            },
            valueFormatter: (value:Date) => {
            if (!value) return '';
            return value.toLocaleDateString('en-GB'); // European format: DD/MM/YYYY
        }
            
        },
        { field: 'quantity', headerName: 'Quantity', type: 'number' },
        { field: 'unitCost', headerName: 'Unit cost', type: 'number' },
        { field: 'totalCost', headerName: 'Total cost', type: 'number' },
        { field: 'status', headerName: 'Status', type: 'string' },

    ];

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

    const paginationModel = { page: 0, pageSize: 5 };
    return (
        <Paper sx={{ width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                sx={{ border: 0 }}
                disableColumnResize ={true}
            />
        </Paper>
    )
}

export default OrdersTable