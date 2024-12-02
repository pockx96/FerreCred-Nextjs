"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "~/components/ui/table";

export const TableProvider = () => {
  const providers = [
    {
      rfc: "MHE920615B83",
      empresa: "Empresas Sa de Cv",
      telefono: "638-109-28-93",
      direccion: "av. Lopez portillo",
    },
    {
      rfc: "ABC010203DFA",
      empresa: "Soluciones Integrales MX",
      telefono: "555-123-45-67",
      direccion: "Calle Reforma 123",
    },
    {
      rfc: "DEF020304GHI",
      empresa: "Distribuidora de Herramientas",
      telefono: "777-987-65-43",
      direccion: "Av. Juárez 456",
    },
    {
      rfc: "GHI030405JKL",
      empresa: "Comercializadora del Norte",
      telefono: "662-789-01-23",
      direccion: "Blvd. Hidalgo 789",
    },
    {
      rfc: "JKL040506MNO",
      empresa: "Logística y Transporte S.A.",
      telefono: "614-654-32-10",
      direccion: "Calle Insurgentes 321",
    },
    {
      rfc: "MNO050607PQR",
      empresa: "Fábrica de Textiles",
      telefono: "331-456-78-90",
      direccion: "Av. Patria 987",
    },
    {
      rfc: "PQR060708STU",
      empresa: "Construcciones Modernas",
      telefono: "871-567-89-01",
      direccion: "Calle Independencia 654",
    },
    {
      rfc: "STU070809VWX",
      empresa: "Electrónicos del Centro",
      telefono: "449-678-90-12",
      direccion: "Blvd. Colosio 210",
    },
    {
      rfc: "VWX080910YZA",
      empresa: "Agropecuaria del Sur",
      telefono: "229-789-01-23",
      direccion: "Carretera Nacional Km 45",
    },
    {
      rfc: "YZA091011BCD",
      empresa: "Tecnología Avanzada",
      telefono: "993-890-12-34",
      direccion: "Av. Tecnológico 567",
    },
    {
      rfc: "BCD101112EFG",
      empresa: "Importaciones del Pacífico",
      telefono: "833-901-23-45",
      direccion: "Zona Industrial 321",
    },
  ];

  const handleIconame = (name: string) => {
    const icoName = name.slice(0, 2);
    return icoName;
  };
  return (
    <section className="mr-20 w-full">
      <Table>
        <TableRow>
          <TableHead> </TableHead>
          <TableHead>Id</TableHead>
          <TableHead>Nombre</TableHead>
        </TableRow>
        <TableBody>
          {providers.length > 0 ? (
            providers.map((provider, index) => (
              <TableRow className="h-24 py-2">
                <TableCell
                  colSpan={2}
                  className="mt-2 rounded-full bg-blue-500 text-center"
                >
                  {handleIconame(provider.empresa)}
                </TableCell>
                <TableCell className="">{provider.rfc}</TableCell>
                <TableCell className="">{provider.empresa}</TableCell>
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
    </section>
  );
};
