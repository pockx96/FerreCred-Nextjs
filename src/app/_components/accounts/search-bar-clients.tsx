"use client";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { api } from "~/trpc/react";
import { useState } from "react";
import { ClientType } from "../../../validations/clientSchema";

export default function SearchBarClients({
  onSelectClient,
}: {
  onSelectClient: (client: ClientType) => void;
}) {
  const clients = api.client.getAll.useQuery();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput
        placeholder="Busque su cliente..."
        onFocus={() => setIsFocused(true)}
      />
      <CommandList>
        <CommandEmpty>No se encontraron resultados.</CommandEmpty>
        <CommandGroup
          className={isFocused ? "" : "hidden"}
          heading="Sugerencias"
        >
          {clients.data &&
            clients.data.map((client) => (
              <CommandItem key={client.name}>
                <button
                  onClick={() => {
                    onSelectClient(client);
                    setIsFocused(false);
                  }}
                >
                  {client.name}
                </button>
              </CommandItem>
            ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
