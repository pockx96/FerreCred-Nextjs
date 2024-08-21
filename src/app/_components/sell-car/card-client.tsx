import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "~/components/ui/separator";

export function CardClient() {
  return (
    <Card className="w-2/12 mr-8 h-full ">
      <CardHeader className="flex flex-col justify-start p-1">
        <CardDescription>Cliente.</CardDescription>
        <CardTitle className="self-center">Marisela Vasquez</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col justify-start p-1">
        <CardDescription>Adeudo Actual</CardDescription>
        <h1 className="text-3xl text-slate-800 self-center">$524.50</h1>
      </CardContent>
    </Card>
  );
}
