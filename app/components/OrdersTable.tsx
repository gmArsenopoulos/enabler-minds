'use client'

const OrdersTable = () => {
    // const columns: GridColDef[] = [
    //     {
    //         field: 'orderDate',
    //         headerName: 'Order date',
    //         type: 'date',
    //         flex:1,
    //         align:'center',headerAlign:'center',
    //         valueGetter: (value) => {
    //             const date = new Date(value);
    //             return date
    //         },
    //         valueFormatter: (value:Date) => {
    //         if (!value) return '';
    //         return value.toLocaleDateString('en-GB');
    //     }
            
    //     },
    //     { field: 'quantity', headerName: 'Quantity', type: 'number',flex:1 ,align:'center',headerAlign:'center',},
    //     { field: 'unitCost', headerName: 'Unit cost', type: 'number', flex:1,align:'center',headerAlign:'center', valueFormatter:(value)=>`${value}€` },
    //     { field: 'totalCost', headerName: 'Total cost', type: 'number',flex:1,align:'center',headerAlign:'center', valueFormatter:(value)=>`${value}€` },
    //     { field: 'status', headerName: 'Status', type: 'string', flex:1,align:'center',headerAlign:'center',renderCell:(params)=>{
    //         const statusColors={
    //             planned:'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    //             confirmed:'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    //             delivered:'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    //         }

    //         return <span className={`px-2 py-1 font-semibold border rounded-md ${statusColors[params.value as keyof typeof statusColors]}`}>{params.value}</span>
    //     } },

    // ];

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

    const paginationModel = { page: 0, pageSize: 10 };
    return (
        <></>
            // <DataGrid
            //     rows={rows}
            //     columns={columns}
            //     initialState={{ pagination: { paginationModel } }}
            //     pageSizeOptions={[5, 10,15,20]}
            //     sx={{ border: 1,width:'100%' }}
            //     disableColumnResize
            //     disableColumnFilter
            //     disableAutosize
            //     disableColumnMenu
            //     disableRowSelectionOnClick
            // />
    )
}

export default OrdersTable