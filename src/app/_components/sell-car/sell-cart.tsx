"use client";

import { useState, useMemo, useCallback } from "react";
import { SellTable } from "./sell-table";
import { CardTotal } from "./card-total";
import { CardClient } from "./card-client";
import { CardDebt } from "./card-debt";
import { ButtonFinish } from "./button-finish";
import { SearchBarProducts } from "./search-bar-products";
import { ProductType } from "~/server/api/routers/products";

export const SellCart = () => {
  const [selectedProducts, setSelectedProducts] = useState<ProductType[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleSelectProduct = (product: ProductType) => {
    setSelectedProducts((prevProducts) => [...prevProducts, product]);
  };

  const handleClearProducts = () => {
    setSelectedProducts([]);
    setTotalPrice(0);
  };

  const handleQuantityChange = useCallback((newTotal: number) => {
    setTotalPrice(newTotal);
  }, []);

  const cashierName = "John Doe";

  return (
    <section className="flex max-h-full w-full flex-col">
      <div className="flex items-center justify-start py-2">
        <SearchBarProducts onSelectProduct={handleSelectProduct} />
      </div>
      <div className="flex h-[20%] justify-start">
        <CardClient />
        <CardDebt />
      </div>
      <div className="my-2 flex w-full justify-start">
        <div className="w-full">
          <SellTable products={selectedProducts} onQuantityChange={handleQuantityChange} />
        </div>
      </div>
      <div className="flex h-2/5 justify-end">
        <ButtonFinish totalPrice={totalPrice} clearProducts={handleClearProducts} cashierName={cashierName}/>
        <CardTotal total={totalPrice} />
      </div>
    </section>
  );
};
