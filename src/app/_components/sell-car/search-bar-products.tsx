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
        onBlur={() => setIsFocused(false)}
      />
      <CommandList>
        <ul>
          {products.data &&
            products.data.map((product) => (
              <div>
                <li
                  key={product.code}
                  onClick={() => onSelectProduct(product)}
                  className="cursor-pointer p-2 hover:bg-gray-200"
                >
                  {product.description}
                </li>
              </div>
            ))}
        </ul>
      </CommandList>
    </Command>
  );
}
