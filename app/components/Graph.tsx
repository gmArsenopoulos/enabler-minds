'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { StockData } from '../core/models/interfaces/StockData';

interface GraphProps {
  stock: StockData[]
}

const Graph = ({ stock }: GraphProps) => {

  const dates = () => {
    const months = stock.map(s => new Date(s.month).getTime());
    const minMonth = new Date(Math.min(...months));
    const maxMonth = new Date(Math.max(...months));
    return {
      start: minMonth.toLocaleDateString('en-GB', { year: 'numeric', month: 'long' }),
      end: maxMonth.toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })
    }
  }

  const chartConfig = {
    untits: {
      label: "Units",
    },
    stockLevel: {
      label: "Inventory stock",
      color: "var(--chart-1)",
    },
    demand: {
      label: "Customer demand",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig


  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory stock vs Customer demand</CardTitle>
        <CardDescription>{dates().start} - {dates().end}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={stock}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={true}
              tickFormatter={(value) => value}
            />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent active={true} />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="stockLevel"
              stackId="a"
              fill="var(--chart-1)"
            />
            <Bar
              dataKey="demand"
              stackId="b"
              fill="var(--chart-2)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default Graph