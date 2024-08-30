'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import { api } from "~/trpc/react"

  export function SellTable() {
    const products = api.product.getAll.useQuery()
    return (
      <Table className="w-full mt-6">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Codigo</TableHead>
            <TableHead>Cantidad</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead className="text-right">Peso</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Importe</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {products.data &&
        products.data.map((product) => (
            <TableRow key={product.code}>
              <TableCell className="font-medium">{product.code}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell className="text-right">{product.weight}</TableCell>
              <TableCell>{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  