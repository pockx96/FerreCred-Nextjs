import SearchResults from "./search-bar-results";
import { useState } from "react";
import SearchBox from "./search-box";

interface Product {
  code: string;
  description: string;
  weight: number;
  price: number;
}


export default function SearchBarSell({
  onSelectProduct,
}: {
  onSelectProduct: (product: Product) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex w-1/2 flex-col items-center space-y-4">
      <SearchBox setSearchTerm={setSearchTerm} />
      {searchTerm && (
        <SearchResults
          searchTerm={searchTerm}
          onSelectProduct={onSelectProduct}
        />
      )}
    </div>
  );
}
