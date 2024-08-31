import { api } from "~/trpc/react";
import { useState } from "react";

export default function SearchResults({ searchTerm }: { searchTerm: string }) {
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
        <li key={product.code}>{product.description}</li>
      ))}
    </ul>
  );
}
