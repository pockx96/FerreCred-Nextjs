"use client";

import { useState, useEffect } from "react";
import { Label } from "~/components/ui/label";
import { AccountCard } from "./account-card";
import { AccountTable } from "./account-table";
import SearchBarClients from "./search-bar-clients";
import { Button } from "~/components/ui/button";
import { ClientType } from "../../../validations/clientSchema";
import { api } from "~/trpc/react";

export const AccountClient = () => {
  const [selectedClient, setSelectedClient] = useState<ClientType | null>(null);
  const debtsQuery = api.debt.getByClientId.useQuery(
    { clientId: selectedClient?.id ?? 0 },
    { enabled: !!selectedClient },
  );

  const debts =
    debtsQuery.data?.map((debt) => ({
      ...debt,
      amount: parseFloat(debt.amount.toString()), // Convertir Decimal a number
    })) ?? [];

  // Filtrar deudas no pagadas
  const unpaidDebts = debts.filter((debt) => !debt.isPaid);

  // Calcular la deuda total de las deudas no pagadas
  const totalDebt = unpaidDebts.reduce((sum, debt) => sum + debt.amount, 0);

  return (
    <section className="flex max-h-full w-full flex-col">
      <div className="flex justify-between">
        <SearchBarClients
          onSelectClient={(client: ClientType) => setSelectedClient(client)}
        />
      </div>
      <div className="flex h-[20%] items-center justify-between px-2">
        <Label className="text-2xl">Crear nuevo cliente</Label>
        <AccountCard client={selectedClient} totalDebt={totalDebt} />
      </div>
      <div className="my-2 flex w-full justify-start px-2">
        <div className="w-full"></div>
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
