import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function ButtonFinish() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="mr-4 h-2/5 w-1/5 rounded-xl bg-primary-orange text-2xl font-bold">
          Finalizar Compra
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex h-3/4 w-full flex-col justify-between">
        <AlertDialogHeader>
          <AlertDialogTitle>Confirmar Pago</AlertDialogTitle>
          <AlertDialogDescription>Metodo de Pago</AlertDialogDescription>
        </AlertDialogHeader>
        <ul>
          <li>producto x</li>
          <li>producto y</li>
          <li>producto z</li>
        </ul>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
