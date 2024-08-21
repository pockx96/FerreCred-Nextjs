import * as React from "react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "~/components/ui/separator"

export function CardTotal() {
  return (
    <Card className="w-1/4 h-full">
      <CardHeader className="py-2">
        <CardTitle>Total</CardTitle>
      </CardHeader>
      <Separator/>
      <CardContent className="py-6">
       <h1 className="text-5xl font-bold text-slate-800">$1524.50</h1>
      </CardContent>
    </Card>
  )
}
