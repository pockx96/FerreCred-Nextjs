"use client";

import { useState, useContext, useCallback, createContext } from "react";
import React from "react";
import { ProductType } from "~/server/api/routers/products";
import { SearchBarProducts } from "../sell-car/search-bar-products";
import { CardTotal } from "../sell-car/card-total";
import { OrderTable } from "./order-table";

// Crear contexto para almacenar productos seleccionados
export const ProductsContext = createContext<ProductType[]>([]);
export const cashierName = createContext("John Doe");

export const OrderSale = () => {
  const [selectedProducts, setSelectedProducts] = useState<ProductType[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleSelectProduct = async (product: ProductType) => {
    product.stock = 1;
    setSelectedProducts((prevProducts) => [...prevProducts, product]);
    setTotalPrice((prevTotalPrice) => {
      const newTotal = prevTotalPrice + product.price;
      return newTotal;
    });
  };

  const handleClearProducts = () => {
    setSelectedProducts([]);
    setTotalPrice(0);
  };

  const handleQuantityChange = useCallback((newTotal: number) => {
    setTotalPrice(newTotal);
  }, []);

  return (
    <ProductsContext.Provider value={selectedProducts}>
      <section className="flex max-h-full w-full flex-col">
        <div className="flex items-center justify-start py-2">
          <SearchBarProducts onSelectProduct={handleSelectProduct} />
        </div>
        <div className="my-2 flex w-full justify-start">
          <div className="w-full">
            <OrderTable onQuantityChange={handleQuantityChange} />
          </div>
        </div>
        <div className="flex h-2/5 justify-end">
          <CardTotal total={totalPrice} />
        </div>
      </section>
    </ProductsContext.Provider>
  );
};

// Hook para usar ProductsContext en otros componentes
