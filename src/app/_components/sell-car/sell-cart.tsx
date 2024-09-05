"use client";

import { useState, useMemo, useEffect } from "react";
import { SellTable } from "./sell-table";
import { CardTotal } from "./card-total";
import { CardClient } from "./card-client";
import { CardDebt } from "./card-debt";
import { ButtonFinish } from "./button-finish";
import { SearchBarProducts } from "./search-bar-products";

interface Product {
  code: string;
  description: string;
  weight: number;
  price: number;
}

export const SellCart = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const handleSelectProduct = (product: Product) => {
    console.log("producto añadido al array");
    console.log(product);
    setSelectedProducts((prevProducts) => [...prevProducts, product]);
  };

  const handletest = () => {
    console.log("this is working");
  };

  // Calculate total price
  const totalPrice = useMemo(() => {
    return selectedProducts.reduce((sum, product) => sum + product.price, 0);
  }, [selectedProducts]);

  useEffect(() => {
    console.log("Selected products updated:", selectedProducts);
  }, [selectedProducts]);

  return (
    <section className="flex max-h-full w-full flex-col">
      <div className="flex items-center justify-start py-2">
        <SearchBarProducts
          onTest={handletest}
          onSelectProduct={handleSelectProduct}
        />
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
