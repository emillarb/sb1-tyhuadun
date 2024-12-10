"use client"

import { Bell, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-6 gap-4 justify-between">
        <div className="flex items-center gap-4">
          <span className="font-semibold">Account / Overview</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span>$64,255.35</span>
            <span className="text-green-500">$3,254.84</span>
            <span className="text-green-500">Synced</span>
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}