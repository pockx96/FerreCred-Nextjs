'use client'

import { useState, useMemo } from "react";
import { PaySelection } from "./pay-selection";
import { SellTable } from "./sell-table";
import { CardTotal } from "./card-total";
import SearchPage from "./search-bar-sell";
import { CardClient } from "./card-client";
import { CardDebt } from "./card-debt";

interface Product {
  code: string;
  description: string;
  weight: number;
  price: number;
}

export const SellCart = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const handleSelectProduct = (product: Product) => {
    setSelectedProducts((prevProducts) => [...prevProducts, product]);
  };

  // Calculate total price
  const totalPrice = useMemo(() => {
    return selectedProducts.reduce((sum, product) => sum + product.price, 0);
  }, [selectedProducts]);

  return (
    <section className="flex flex-col w-full max-h-full">
      <div className="flex justify-between">
        <PaySelection />
        <SearchPage onSelectProduct={handleSelectProduct} />
      </div>
      <div className="flex justify-start h-[20%]">
        <CardClient />
        <CardDebt />
      </div>
      <div className="flex w-full my-2 justify-start">
        <div className="w-full">
          <SellTable products={selectedProducts} />
        </div>
      </div>
      <div className="flex justify-end h-2/5">
        <CardTotal total={totalPrice} />
      </div>
    </section>
  );
}
