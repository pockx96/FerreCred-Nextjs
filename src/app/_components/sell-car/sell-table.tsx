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
  weight: number;
  price: number;
}

interface SellTableProps {
  products: Product[];
}


export function SellTable({ products }: SellTableProps) {
  console.log("Productos en la tabla:", products);

  return (
    <Table className="mt-6 w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Codigo</TableHead>
          <TableHead>Cantidad</TableHead>
          <TableHead>Descripción</TableHead>
          <TableHead className="text-right">Peso</TableHead>
          <TableHead>Precio</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.length > 0 ? (
          products.map((product) => (
            <TableRow key={product.code}>
              <TableCell>{product.code}</TableCell>
              <TableCell>1</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell className="text-right">{product.weight}</TableCell>
              <TableCell>{product.price}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} className="text-center">
              No products selected.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
