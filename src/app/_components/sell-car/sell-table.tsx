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
  return (
    <Table className="w-full mt-6">
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
        {products.map((product) => (
          <TableRow key={product.code}>
            <TableCell>{product.code}</TableCell>
            <TableCell>1</TableCell> {/* Ajusta la cantidad según sea necesario */}
            <TableCell>{product.description}</TableCell>
            <TableCell className="text-right">{product.weight}</TableCell>
            <TableCell>{product.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

