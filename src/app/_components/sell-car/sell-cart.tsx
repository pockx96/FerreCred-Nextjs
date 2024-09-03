"use client";

import { useState, useMemo } from "react";
import { PaySelection } from "./pay-selection";
import { SellTable } from "./sell-table";
import { CardTotal } from "./card-total";
import SearchPage from "./search-bar-sell";
import { CardClient } from "./card-client";
import { CardDebt } from "./card-debt";
import { ButtonFinish } from "./button-finish";

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
    <section className="flex max-h-full w-full flex-col">
      <div className="flex items-center justify-start py-2">
        <SearchPage onSelectProduct={handleSelectProduct} />
      </div>
      <div className="flex h-[20%] justify-start">
        <CardClient />
        <CardDebt />
      </div>
      <div className="my-2 flex w-full justify-start">
        <div className="w-full">
          <SellTable products={selectedProducts} />
        </div>
      </div>
      <div className="flex h-2/5 justify-end">
        <ButtonFinish />
        <CardTotal total={totalPrice} />
      </div>
    </section>
  );
};
