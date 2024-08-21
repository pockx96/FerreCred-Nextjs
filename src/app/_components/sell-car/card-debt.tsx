import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "~/components/ui/separator";

export function CardDebt() {
  return (
    <Card className="w-2/12 mr-8 h-full ">
      <CardHeader className="flex flex-col justify-start p-1">
        <CardDescription>Limite de Credito.</CardDescription>
        <CardTitle className="self-center">$10,000.00</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col justify-start p-1">
        <CardDescription>Saldo disponible</CardDescription>
        <h1 className="text-3xl text-slate-800 self-center">$9,476.50</h1>
      </CardContent>
    </Card>
  );
}
