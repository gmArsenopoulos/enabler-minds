import { KpiMetrics } from "../models/interfaces/KpiMetrics";
import { OrderData } from "../models/interfaces/OrderData";
import { StockData } from "../models/interfaces/StockData";

export const kpiResults = (data: StockData[], orders:OrderData[]): KpiMetrics => {
    const lastUpdated = new Date().toISOString();
    const projectedStockouts = data.filter(d=>d.stockLevel < d.demand).length;

    const serviceLevel = Math.round((1 - projectedStockouts/ data.length) * 100);
    let totalOrdersValue = 0;
    let currentStockLevel = 0;


    orders.forEach(order=>{
        totalOrdersValue += order.quantity * order.unitCost
    })
    data.forEach(d=>{
        currentStockLevel+= d.stockLevel
    })

    return {
        totalOrdersValue,
        currentStockLevel,
        projectedStockouts,
        lastUpdated,
        serviceLevel
    }
}