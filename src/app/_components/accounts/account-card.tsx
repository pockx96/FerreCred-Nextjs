import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { ClientType } from "~/server/api/routers/client";

export function AccountCard({ client, totalDebt }: { client: ClientType | null, totalDebt: number }) {
  if (!client) {
    return (
      <Card className="mr-8 h-full w-1/5">
        <CardHeader className="flex flex-col justify-start p-1">
          <CardDescription>Cliente</CardDescription>
          <CardTitle className="self-center">N/A</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="flex flex-col justify-start p-1">
          <CardDescription>Adeudo Actual</CardDescription>
          <h1 className="self-center text-3xl text-slate-800">N/A</h1>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mr-8 h-full w-1/5">
      <CardHeader className="flex flex-col justify-start p-1">
        <CardDescription>Cliente</CardDescription>
        <CardTitle className="self-center">{client.name}</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col justify-start p-1">
        <CardDescription>Adeudo Actual</CardDescription>
        <h1 className="self-center text-3xl text-slate-800">
          {totalDebt}
        </h1>
      </CardContent>
    </Card>
  );
}
