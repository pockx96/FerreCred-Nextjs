import React, { useContext, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductsContext } from "./sell-cart";

interface Product {
  code: string;
  description: string;
  stock: number;
  weight: number;
  price: number;
}

interface SellTableProps {
  onQuantityChange: (total: number) => void;
}

export function SellTable({ onQuantityChange }: SellTableProps) {
  const [quantity, setQuantity] = useState(1);
  const products = useContext(ProductsContext);

  const calculateTotal = (productIndex: number, amount: number) => {
    const product = products[productIndex];
    product.stock = amount;
    const newPrice = product.price * amount;
    return newPrice;
  };

  return (
    <Table className="mt-6 w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Código</TableHead>
          <TableHead>Cantidad</TableHead>
          <TableHead>Descripción</TableHead>
          <TableHead className="text-right">Peso</TableHead>
          <TableHead>Precio</TableHead>
          <TableHead>Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.length > 0 ? (
          products.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.code}</TableCell>
              <TableCell>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    const value = parseInt(e.target.value) || 1;
                    setQuantity(value);
                    calculateTotal(index, value);
                  }}
                  style={{ width: "40px", textAlign: "center" }}
                />
              </TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell className="text-right">{product.weight}g</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>${(product.price * quantity).toFixed(2)}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={6} className="text-center">
              No products selected.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
