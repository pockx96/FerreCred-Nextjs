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

const productos = [
  {
    codigo: "CLV-001",
    descripcion: "Clavos de acero 2 pulgadas",
    costo: 50.0,
    unidad: "Caja",
    precioVenta: 75.0,
    existencia: 120,
  },
  {
    codigo: "HMR-002",
    descripcion: "Martillo de carpintero",
    costo: 150.0,
    unidad: "Pieza",
    precioVenta: 200.0,
    existencia: 30,
  },
  {
    codigo: "LLV-003",
    descripcion: "Llave inglesa 10 pulgadas",
    costo: 300.0,
    unidad: "Pieza",
    precioVenta: 400.0,
    existencia: 25,
  },
  {
    codigo: "CMT-004",
    descripcion: "Cinta métrica 5 metros",
    costo: 75.0,
    unidad: "Pieza",
    precioVenta: 120.0,
    existencia: 50,
  },
  {
    codigo: "TRN-005",
    descripcion: "Tornillos para madera 1 pulgada",
    costo: 25.0,
    unidad: "Caja",
    precioVenta: 40.0,
    existencia: 200,
  },
  {
    codigo: "SRA-006",
    descripcion: "Sierra de mano 12 pulgadas",
    costo: 250.0,
    unidad: "Pieza",
    precioVenta: 350.0,
    existencia: 15,
  },
  {
    codigo: "TLD-007",
    descripcion: "Taladro eléctrico 600W",
    costo: 800.0,
    unidad: "Pieza",
    precioVenta: 1200.0,
    existencia: 10,
  },
  {
    codigo: "DST-008",
    descripcion: "Juego de destornilladores 6 piezas",
    costo: 200.0,
    unidad: "Juego",
    precioVenta: 300.0,
    existencia: 40,
  },
  {
    codigo: "ALM-009",
    descripcion: "Alambre galvanizado 20 metros",
    costo: 100.0,
    unidad: "Rollos",
    precioVenta: 150.0,
    existencia: 35,
  },
  {
    codigo: "LLT-010",
    descripcion: "Llave de tubo 12 pulgadas",
    costo: 350.0,
    unidad: "Pieza",
    precioVenta: 500.0,
    existencia: 20,
  },
];

export function InventoryProduct() {
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
        {productos.map((invoice) => (
          <TableRow key={invoice.codigo}>
            <TableCell>{invoice.codigo}</TableCell>
            <TableCell className="font-medium">{invoice.descripcion}</TableCell>
            <TableCell>{invoice.costo}</TableCell>
            <TableCell>{invoice.unidad}</TableCell>
            <TableCell className="text-right">{invoice.precioVenta}</TableCell>
            <TableCell className="text-right">{invoice.existencia}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
