"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BalanceChart } from "./balance-chart"
import { PortfolioAssets } from "./portfolio-assets"
import { LoanTable } from "./loan-table"

export function DashboardContent() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Estimated Balance</h2>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-3xl font-bold">278,165.21 USD</p>
              <p className="text-red-500">-$1200.78 (-1.89%)</p>
            </div>
            <select className="bg-background border border-border rounded px-2 py-1">
              <option>Monthly</option>
            </select>
          </div>
          <Tabs defaultValue="assets">
            <TabsList>
              <TabsTrigger value="assets">Assets</TabsTrigger>
              <TabsTrigger value="profits">Profits</TabsTrigger>
              <TabsTrigger value="deposits">Deposits</TabsTrigger>
            </TabsList>
            <TabsContent value="assets">
              <BalanceChart />
            </TabsContent>
          </Tabs>
        </Card>
        <PortfolioAssets />
      </div>
      <LoanTable />
    </div>
  )
}