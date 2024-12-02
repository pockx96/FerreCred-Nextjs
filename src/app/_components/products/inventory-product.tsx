"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { api } from "~/trpc/react";

export function InventoryProduct() {
  const products = api.product.getAll.useQuery().data ?? [];
  return (
    <Table className="mx-auto mt-4 w-3/4 rounded bg-slate-200">
      <TableCaption>Kardex de inventario.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Codigo</TableHead>
          <TableHead>Descripcion</TableHead>
          <TableHead>Costo</TableHead>
          <TableHead className="text-right">Unidad</TableHead>
          <TableHead className="text-right">Precio de venta</TableHead>
          <TableHead className="text-right">Existencia</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((invoice) => (
          <TableRow key={invoice.ProductId}>
            <TableCell>{invoice.ProductId}</TableCell>
            <TableCell className="font-medium">{invoice.description}</TableCell>
            <TableCell>{invoice.priceBuy}</TableCell>
            <TableCell>pendiente</TableCell>
            <TableCell className="text-right">{invoice.priceSale}</TableCell>
            <TableCell className="text-right">{invoice.stock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
