"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const assets = [
  {
    symbol: "BTC",
    amount: "0.58940",
    value: "37,983.64",
    change: "-1.81%",
    percentage: 55,
  },
  {
    symbol: "ETH",
    amount: "0.58940",
    value: "9,942.86",
    change: "+4.42%",
    percentage: 25,
  },
  {
    symbol: "TRN",
    amount: "0.58940",
    value: "562.75",
    change: "-4.78%",
    percentage: 20,
  },
]

export function PortfolioAssets() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Portfolio Assets</h2>
      <div className="space-y-6">
        <div className="flex gap-2">
          <div className="h-12 w-24 rounded bg-[hsl(var(--chart-1))]" />
          <div className="h-12 w-24 rounded bg-[hsl(var(--chart-2))]" />
          <div className="h-12 flex-1 rounded bg-muted" />
        </div>
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div>
            <div>BTC</div>
            <div className="text-muted-foreground">55%</div>
          </div>
          <div>
            <div>ETH</div>
            <div className="text-muted-foreground">25%</div>
          </div>
          <div>
            <div>Other</div>
            <div className="text-muted-foreground">20%</div>
          </div>
        </div>
        <div className="space-y-4">
          {assets.map((asset) => (
            <div key={asset.symbol} className="flex items-center gap-4">
              <div className="h-8 w-8 rounded-full bg-muted" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div>{asset.amount} {asset.symbol}</div>
                    <div className="text-sm text-muted-foreground">${asset.value} USD</div>
                  </div>
                  <div className="text-sm text-red-500">{asset.change}</div>
                </div>
                <Progress value={asset.percentage} className="mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}