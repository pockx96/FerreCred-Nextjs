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
import { ProductType } from "~/server/api/routers/products";

export function SearchBarProducts({
  onSelectProduct,
}: {
  onSelectProduct: (product: ProductType) => void;
}) {
  const products = api.product.getAll.useQuery();
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput
        placeholder="Busque su producto..."
        onFocus={() => setIsFocused(true)}
      />
      <CommandList>
        <CommandEmpty>No se encontraron resultados.</CommandEmpty>
        <CommandGroup
          className={isFocused ? "" : "hidden"}
          heading="Sugerencias"
        >
          {products.data &&
            products.data.map((product) => (
              <CommandItem key={product.ProductId}>
                <button
                  onClick={() => {
                    onSelectProduct(product);
                    setIsFocused(false);
                  }}
                >
                  {product.description}
                </button>
              </CommandItem>
            ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
