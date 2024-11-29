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

const invoices = [
  {
    fecha: "2024-11-27",
    descripcion: "Martillo",
    entrada: "",
    salida: "5",
    existencia: "45",
  },
  {
    fecha: "2024-11-26",
    descripcion: "Llave inglesa",
    entrada: "20",
    salida: "",
    existencia: "70",
  },
  {
    fecha: "2024-11-25",
    descripcion: "Cinta métrica",
    entrada: "",
    salida: "10",
    existencia: "30",
  },
  {
    fecha: "2024-11-24",
    descripcion: "Tornillos para madera",
    entrada: "100",
    salida: "",
    existencia: "200",
  },
  {
    fecha: "2024-11-23",
    descripcion: "Sierra de mano",
    entrada: "",
    salida: "3",
    existencia: "17",
  },
  {
    fecha: "2024-11-22",
    descripcion: "Taladro eléctrico",
    entrada: "5",
    salida: "",
    existencia: "15",
  },
  {
    fecha: "2024-11-21",
    descripcion: "Juego de destornilladores",
    entrada: "",
    salida: "8",
    existencia: "22",
  },
  {
    fecha: "2024-11-20",
    descripcion: "Alambre galvanizado",
    entrada: "30",
    salida: "",
    existencia: "60",
  },
  {
    fecha: "2024-11-19",
    descripcion: "Llave de tubo",
    entrada: "",
    salida: "6",
    existencia: "14",
  },
  {
    fecha: "11-09-2001",
    descripcion: "Clavos",
    entrada: "1",
    salida: "",
    existencia: "10",
  },
];

export function KardexProduct() {
  return (
    <Table className="mx-auto mt-4 w-3/4 rounded bg-slate-200">
      <TableCaption>Kardex de inventario.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Fecha</TableHead>
          <TableHead>Descripcion</TableHead>
          <TableHead>Entrada</TableHead>
          <TableHead className="text-right">Salida</TableHead>
          <TableHead className="text-right">Existencia</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.fecha}>
            <TableCell className="font-medium">{invoice.fecha}</TableCell>
            <TableCell>{invoice.descripcion}</TableCell>
            <TableCell>{invoice.entrada}</TableCell>
            <TableCell className="text-right">{invoice.salida}</TableCell>
            <TableCell className="text-right">{invoice.existencia}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
