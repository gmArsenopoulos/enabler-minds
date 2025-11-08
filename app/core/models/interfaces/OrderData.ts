export interface OrderData{
    id:string;
    orderDate:string;
    quantity:number;
    unitCost:number;
    status: 'planned' | 'confirmed' | 'delivered';
}