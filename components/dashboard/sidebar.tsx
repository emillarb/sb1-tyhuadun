"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  LayoutDashboard, 
  Wallet, 
  ShoppingCart, 
  Clock, 
  History, 
  ArrowLeftRight, 
  TrendingUp,
  PiggyBank,
  BarChart2,
  Bell,
  MoreHorizontal,
  Search
} from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-[250px] border-r border-border/40 h-screen">
      <div className="flex h-14 items-center border-b border-border/40 px-6">
        <span className="font-bold text-xl">CoinVers</span>
      </div>
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search..."
            className="w-full rounded-md border border-border/40 bg-background px-8 py-2 text-sm"
          />
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)] px-2">
        <div className="space-y-1 p-2">
          <Button variant="ghost" className="w-full justify-start">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Overview
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Wallet className="mr-2 h-4 w-4" />
            Balances
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Orders
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Clock className="mr-2 h-4 w-4" />
            Unsettled
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <History className="mr-2 h-4 w-4" />
            History
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <ArrowLeftRight className="mr-2 h-4 w-4" />
            Swap
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <TrendingUp className="mr-2 h-4 w-4" />
            Trade
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <PiggyBank className="mr-2 h-4 w-4" />
            Borrow
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <BarChart2 className="mr-2 h-4 w-4" />
            Stats
          </Button>
        </div>
      </ScrollArea>
      <div className="absolute bottom-4 left-0 right-0 px-4">
        <div className="flex items-center gap-2 rounded-lg border border-border/40 p-4">
          <div className="h-8 w-8 rounded-full bg-muted" />
          <div className="flex-1">
            <p className="text-sm">client264@paxful...</p>
            <p className="text-xs text-muted-foreground">ID: 482287356</p>
          </div>
        </div>
      </div>
    </div>
  )
}