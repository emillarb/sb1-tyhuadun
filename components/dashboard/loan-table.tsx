"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const loans = [
  {
    id: 1,
    currency: "BTC",
    collateral: "2.01",
    loan: "5,000 USD",
    ltv: 80,
    maturityDate: "2024-07-20",
  },
  {
    id: 2,
    currency: "ETH",
    collateral: "2.01",
    loan: "5,000 USD",
    ltv: 20,
    maturityDate: "2024-07-20",
  },
  {
    id: 3,
    currency: "BTC",
    collateral: "2.01",
    loan: "5,000 USD",
    ltv: 50,
    maturityDate: "2024-07-20",
  },
  {
    id: 4,
    currency: "TRN",
    collateral: "2.01",
    loan: "5,000 USD",
    ltv: 80,
    maturityDate: "2024-07-20",
  },
  {
    id: 5,
    currency: "ETH",
    collateral: "2.01",
    loan: "5,000 USD",
    ltv: 40,
    maturityDate: "2024-07-20",
  },
]

export function LoanTable() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <Tabs defaultValue="history">
          <TabsList>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="loans">Loans</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="savings">Savings</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-2">
          <span>2024-04-19</span>
          <span>—</span>
          <span>2024-07-20</span>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left text-sm text-muted-foreground">
            <th className="pb-4">CURRENCY</th>
            <th className="pb-4">COLLATERAL</th>
            <th className="pb-4">REMAINING LOAN</th>
            <th className="pb-4">LTV</th>
            <th className="pb-4">MATURITY DATE</th>
            <th className="pb-4">LOAN STATUS OVERVIEW</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id} className="border-t border-border/40">
              <td className="py-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-muted" />
                  <span>Loan {loan.id}</span>
                </div>
              </td>
              <td className="py-4">{loan.collateral}</td>
              <td className="py-4">{loan.loan}</td>
              <td className="py-4">
                <Progress value={loan.ltv} className="w-16" />
              </td>
              <td className="py-4">{loan.maturityDate}</td>
              <td className="py-4">...</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-8 flex justify-between items-start">
        <div>
          <div className="text-2xl font-bold mb-2">68%</div>
          <div className="text-sm text-muted-foreground">Good Stand</div>
        </div>
        <div className="flex gap-8">
          <div>
            <div className="text-2xl font-bold mb-2">20,145.28</div>
            <div className="text-sm text-muted-foreground">Paid</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">12,165.42</div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-2">8,165.21</div>
            <div className="text-sm text-muted-foreground">Unpaid</div>
          </div>
        </div>
      </div>
    </Card>
  )
}