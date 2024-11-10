import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Product {
  code: string;
  description: string;
  stock:  number;
  weight: number;
  price: number;
}

interface SellTableProps {
  products: Product[];
  onQuantityChange: (total: number) => void;
}

export function SellTable({ products, onQuantityChange }: SellTableProps) {
  const [quantities, setQuantities] = useState<number[]>(Array(products.length).fill(1));

  const handleQuantityChange = (index: number, value: number) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = value;
    setQuantities(updatedQuantities);
    const newTotal = calculateTotal(products, updatedQuantities);
    onQuantityChange(newTotal);
  };

  const calculateTotal = (products: Product[], quantities: number[]) => {
    return products.reduce((acc, product, index) => {
      return acc + product.price * quantities[index];
    }, 0);
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
                  value={quantities[index]}
                  onChange={(e) =>
                    handleQuantityChange(index, parseInt(e.target.value) || 1)
                  }
                  style={{ width: "40px", textAlign: "center" }}
                />
              </TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell className="text-right">{product.weight}g</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>${(product.price * quantities[index]).toFixed(2)}</TableCell>
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
