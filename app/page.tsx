'use client'
import logo from "../public/images/logo.avif"
import Kpi from "./components/Kpi"
import Graph from "./components/Graph"
import OrdersTable from "./components/OrdersTable"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { StockData } from "./core/models/interfaces/StockData"
import { useEffect, useState } from "react"
import { KpiMetrics } from "./core/models/interfaces/KpiMetrics"
import { modifiedStock } from './core/functions/stock'
import { kpiResults } from "./core/functions/kpi"
import { getOrders } from "./core/functions/order"
import { belowBreakPoint } from "./core/functions/breakpoint"
import { OrderData } from "./core/models/interfaces/OrderData"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



const page = () => {
  const queryClient = useQueryClient();
  const [kpi, setKpi] = useState<KpiMetrics>();
  const [stock, setStock] = useState<StockData[]>(modifiedStock(50));
  const [orders, setOrders] = useState<OrderData[]>(getOrders);

  const tabView = belowBreakPoint(1536);
  
  const { data: demand } = useQuery({
    queryKey: ["demand"],
    queryFn: async () => queryClient.getQueryData<number>(["demand"]) ?? 50,
  });

  const serviceLevel = (serviceLevel: number) => {
    if (serviceLevel >= 90) {
      return {
        class: 'text-green-500',
        subtitle: 'Keep up the good work!'
      }
    }
    if (serviceLevel >= 60) {
      return {
        class: 'text-orange-500',
        subtitle: 'Good job! Aim for the best'
      }
    }
    return {
      class: 'text-red-500',
      subtitle: 'You need to be wary of your storage!'
    }
  }

  const plannedOrders = (orders: OrderData[]) => orders.filter(order => order.status === 'planned').length

  const projectedStock = (stock:StockData[])=> stock.filter(s=>s.projected).length

  const formatDate = (date: string) => {
    const fDate = new Date(date);
    return fDate.toLocaleString('en-GB', {
      weekday: "short",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  }


  useEffect(() => {
    if (demand) {
      setStock(modifiedStock(demand))
    }
  }, [demand])



  useEffect(() => {
    setKpi(kpiResults(stock, orders));
  }, stock);

  return (
    <div className="py-12 px-20">
      <img src={logo.src} alt="company logo" className="mb-5 w-sm" />
      {kpi && <div>
        <small className="text-gray-400">Last update: {formatDate(kpi.lastUpdated)}</small>
        <div className="grid 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          <Kpi title="Total orders" value={`${kpi.totalOrdersValue}€`} valueClassName="text-green-500" subtitle={`Planned orders: ${plannedOrders(orders)}`} />
          <Kpi title="Inventory stock" value={`${kpi.currentStockLevel} un.`} subtitle={`Projected months: ${projectedStock(stock)}`} />
          <Kpi title="Projected stockouts" value={kpi.projectedStockouts} valueClassName="text-red-500" subtitle={kpi.projectedStockouts > 0 ? 'Be careful!' : 'Excellent job!'} />
          <Kpi title={`Service level ${ demand !=0 ?'(Demand:'+demand+'%)':''}`} value={`${kpi.serviceLevel}%`} valueClassName={serviceLevel(kpi.serviceLevel).class} subtitle={serviceLevel(kpi.serviceLevel).subtitle} />

        </div>
      </div>}
      {
        !tabView ?
        <div className="grid grid-cols-2 gap-5 mt-5">
        <Graph stock={stock} />
        <OrdersTable orders={orders} />
      </div>:
      <Tabs defaultValue="graph" className="w-full mt-10">
        <TabsList>
          <TabsTrigger value="graph" className="text-lg p-3">Graph overview</TabsTrigger>
          <TabsTrigger value="order" className="text-lg p-3">Orders</TabsTrigger>
        </TabsList>
        <TabsContent value="graph">
          <div className="w-full mt-5">
            <Graph stock={stock} />
          </div>
        </TabsContent>
        <TabsContent value="order">
          <div className="w-full mt-5">
          <OrdersTable orders={orders} />
          </div>
          </TabsContent>
      </Tabs>
      }
      
      
    </div>
  )
}

export default page
