"use client";

import { useState, useContext, useCallback, createContext } from "react";
import React from "react";
import { SellTable } from "./sell-table";
import { CardTotal } from "./card-total";
import { CardClient } from "./card-client";
import { CardDebt } from "./card-debt";
import { ButtonFinish } from "./button-finish";
import { SearchBarProducts } from "./search-bar-products";
import { ProductType } from "~/server/api/routers/products";

// Crear contexto para almacenar productos seleccionados
export const ProductsContext = createContext<ProductType[]>([]);

export const SellCart = () => {
  const [selectedProducts, setSelectedProducts] = useState<ProductType[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const selectedProductsContext = useContext(ProductsContext);

  const printArrayValues = () => {
    selectedProducts.forEach((value) => console.log(value));
  };

  const handleSelectProduct = async (product: ProductType) => {
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
    <ProductsContext.Provider value={selectedProducts}>
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
            <SellTable onQuantityChange={handleQuantityChange} />
          </div>
        </div>
        <div className="flex h-2/5 justify-end">
          <ButtonFinish
            totalPrice={totalPrice}
            clearProducts={handleClearProducts}
            cashierName={cashierName}
          />
          <CardTotal total={totalPrice} />
        </div>
      </section>
    </ProductsContext.Provider>
  );
};

// Hook para usar ProductsContext en otros componentes
