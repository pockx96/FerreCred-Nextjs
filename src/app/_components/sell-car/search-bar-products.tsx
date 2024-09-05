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
import { Button } from "~/components/ui/button";
import { Onest } from "next/font/google";

interface Product {
  code: string;
  description: string;
  weight: number;
  price: number;
}

export function SearchBarProducts({
  onSelectProduct,
  onTest,
}: {
  onSelectProduct: (product: Product) => void;
  onTest: () => void;
}) {
  const products = api.product.getAll.useQuery();
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput
        placeholder="Type a command or search..."
        onFocus={() => setIsFocused(true)}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup
          className={isFocused ? "" : "hidden"}
          heading="Sugerencias"
        >
          {products.data &&
            products.data.map((product) => (
              <CommandItem key={product.code} onClick={onTest}>
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
