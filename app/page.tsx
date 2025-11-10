import logo from "../public/images/logo.avif"
import Kpi from "./components/Kpi"
import Graph from "./components/Graph"
import OrdersTable from "./components/OrdersTable"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"

const page = () => {
  return (
    <div className="py-12 px-20">
      <img src={logo.src} alt="company logo" className="mb-5 w-sm" />
      <div className="grid grid-cols-4 gap-5 ">
        <Kpi title="Total orders" value="524287.50€" valueClassName="text-green-500" subtitle="Planned orders: 5" />
        <Kpi title="Inventory stock" value="4200" subtitle="Projected months: 2" />
        <Kpi title="Projected stockouts" value="2" valueClassName="text-red-500" subtitle="Months: November, December" />
        <Kpi title="Service level" value="95%" valueClassName="text-green-500" subtitle="Keep up the good work!" />
      </div>
      {/* <Tabs /> */}
      <Tabs defaultValue="graph" className="w-full">
        <TabsList >
          <TabsTrigger value="graph">Graph overview</TabsTrigger>
          <TabsTrigger value="order">Orders</TabsTrigger>
        </TabsList>
        <TabsContent value="graph"><Graph /></TabsContent>
        <TabsContent value="order"><OrdersTable /></TabsContent>
      </Tabs>
    </div>
  )
}

export default page
