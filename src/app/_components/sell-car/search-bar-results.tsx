import { api } from "~/trpc/react";
import { useState } from "react";

interface Product {
  code: string;
  description: string;
  weight: number;
  price: number;
}

export default function SearchResults({
  searchTerm,
  onSelectProduct,
}: {
  searchTerm: string;
  onSelectProduct: (product: Product) => void;
}) {
  const products = api.product.getAll.useQuery();

  const filteredProducts = products.data?.filter(
    (product) =>
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.code.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (!filteredProducts?.length) {
    return <p>No results found</p>;
  }

  return (
    <ul className="list-disc pl-5">
      {filteredProducts.map((product) => (
        <li
          key={product.code}
          onClick={() => onSelectProduct(product)}
          className="cursor-pointer hover:bg-gray-200 p-2"
        >
          {product.description}
        </li>
      ))}
    </ul>
  );
}
