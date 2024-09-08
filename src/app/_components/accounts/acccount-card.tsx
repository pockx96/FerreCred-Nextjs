import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "~/components/ui/separator";

export function AccountCard() {
  return (
    <Card className="mr-8 h-full w-1/5">
      <CardHeader className="flex flex-col justify-start p-1">
        <CardDescription>Cliente.Marisela Vasquez</CardDescription>
        <CardTitle className="self-center">Abono</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col justify-start p-1">
        <CardDescription>Adeudo Actual</CardDescription>
        <h1 className="self-center text-3xl text-slate-800">$524.50</h1>
      </CardContent>
    </Card>
  );
}
