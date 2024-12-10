"use client"

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', assets: 4000, profits: 2400 },
  { name: 'Feb', assets: 3000, profits: 1398 },
  { name: 'Mar', assets: 2000, profits: 9800 },
  { name: 'Apr', assets: 2780, profits: 3908 },
  { name: 'May', assets: 1890, profits: 4800 },
  { name: 'Jun', assets: 2390, profits: 3800 },
  { name: 'Jul', assets: 3490, profits: 4300 },
]

export function BalanceChart() {
  return (
    <div className="h-[200px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="assets" fill="hsl(var(--chart-1))" />
          <Bar dataKey="profits" fill="hsl(var(--chart-2))" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}