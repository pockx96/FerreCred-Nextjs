"use client";

import { Label } from "~/components/ui/label";
import { AccountCard } from "./acccount-card";
import { AccountTable } from "./account-table";
import SeachBarClients from "./search-bar-clients";
import { Button } from "~/components/ui/button";

export const AccountClient = () => {
  return (
    <section className="flex max-h-full w-full flex-col">
      <div className="flex justify-between">
        <SeachBarClients></SeachBarClients>
      </div>
      <div className="flex h-[20%] items-center justify-between px-2">
        <Label className="text-2xl">Crear nuevo cliente</Label>
        <AccountCard></AccountCard>
      </div>
      <div className="my-2 flex w-full justify-start px-2">
        <div className="w-full">
          <AccountTable></AccountTable>
        </div>
      </div>
      <div className="mt-20 flex h-2/5 items-center justify-end">
        <Button className="mr-4 h-3/4 w-1/12 rounded-xl bg-slate-600 text-sm font-bold">
          Estado de Cuenta
        </Button>
        <Button className="mr-4 h-3/4 w-1/5 rounded-xl bg-primary-orange text-2xl font-bold">
          Realizar Abono
        </Button>
      </div>
    </section>
  );
};
