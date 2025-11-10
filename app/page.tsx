import logo from "../public/images/logo.avif"
import Kpi from "./components/Kpi"
import Graph from "./components/Graph"
import OrdersTable from "./components/OrdersTable"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"

const page = () => {
  return (
    <div className="py-12 px-20">
      <img src={logo.src} alt="company logo" className="mb-5 w-sm" />
      <div>
        <small className="text-gray-400">Last update: Mon 10 November 2025 20:16</small>
        <div className="grid grid-cols-4 gap-5 ">
        <Kpi title="Total orders" value="524287.50€" valueClassName="text-green-500" subtitle="Planned orders: 5" />
        <Kpi title="Inventory stock" value="4200" subtitle="Projected months: 2" />
        <Kpi title="Projected stockouts" value="2" valueClassName="text-red-500" subtitle="Months: November, December" />
        <Kpi title="Service level" value="95%" valueClassName="text-green-500" subtitle="Keep up the good work!" />
      </div>
      </div>
      <div className="grid grid-cols-2 items-center gap-5 mt-5">
        <Graph />
        <OrdersTable />
      </div>
      {/* <Tabs defaultValue="graph" className="w-full mt-10">
        <TabsList>
          <TabsTrigger value="graph" className="text-lg p-3">Graph overview</TabsTrigger>
          <TabsTrigger value="order" className="text-lg p-3">Orders</TabsTrigger>
        </TabsList>
        <TabsContent value="graph">
          <div className="w-[60%] m-auto mt-5">
            <Graph />
          </div>
        </TabsContent>
        <TabsContent value="order">
          <div className="w-[60%] m-auto mt-5">
          <OrdersTable />
          </div>
          </TabsContent>
      </Tabs> */}
    </div>
  )
}

export default page
