import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  


  const products = [
    {
      code: "KR071",
      description: "Taladro",
      amount: "1",
      price: "$1,530.00",
      weight: "1",
      import: "$1,530.00",
    },
    {
      code: "FR034",
      description: "Martillo",
      amount: "2",
      price: "$250.00",
      weight: "0.5",
      import: "$500.00",
    },
    {
      code: "HR098",
      description: "Caja de clavos",
      amount: "10",
      price: "$30.00",
      weight: "0.2",
      import: "$300.00",
    },
    {
      code: "SC256",
      description: "Desarmador plano",
      amount: "3",
      price: "$85.00",
      weight: "0.3",
      import: "$255.00",
    },
    {
      code: "WR045",
      description: "Llave inglesa",
      amount: "1",
      price: "$450.00",
      weight: "0.7",
      import: "$450.00",
    },
    {
      code: "TP679",
      description: "Cinta métrica",
      amount: "4",
      price: "$120.00",
      weight: "0.2",
      import: "$480.00",
    },
    {
      code: "PL389",
      description: "Pinzas de corte",
      amount: "2",
      price: "$310.00",
      weight: "0.4",
      import: "$620.00",
    },
  ];
  
  

  export function AccountTable() {
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
          {products.map((product) => (
            <TableRow key={product.code}>
              <TableCell className="font-medium">{product.code}</TableCell>
              <TableCell>{product.amount}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell className="text-right">{product.weight}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.import}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  