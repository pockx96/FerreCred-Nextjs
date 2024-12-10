import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DebtType } from "../../../validations/debtSchema";

export function AccountTable({ debts }: { debts: DebtType[] }) {
  return (
    <Table className="w-full mt-6">
      <TableHeader>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Monto</TableCell>
          <TableCell>Estado</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {debts.map((debt) => (
          <TableRow key={debt.id}>
            <TableCell>{debt.id}</TableCell>
            <TableCell>{debt.amount}</TableCell>
            <TableCell>{debt.isPaid ? "Pagado" : "Pendiente"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
