"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Separator } from "~/components/ui/separator";
import { api } from "~/trpc/react";

export function ButtonFinish() {
  const subtotal = 100;
  const cashCloseId = 1;
  const [total, setTotal] = useState(subtotal);
  const [pay, setPay] = useState(0);
  const [payTotal, setPayTotal] = useState(0);
  const [paySucces, setPaySucces] = useState(false);
  const [payMethod, setPayMethod] = useState("efective");

  const utils = api.useUtils();
  const cashClose = api.cashClose.getOne.useQuery({ id: cashCloseId });

  const handleCreateCashClose = api.cashClose.createCashRegister.useMutation({
    onSuccess: async () => {
      await utils.cashRegister.invalidate();
      setPaySucces(false);
      setPayTotal(0);
      setPay(0);
      console.log(saleCash);
    },
  });

  const saleCashSchema = {
    user: "test",
    efective: 0,
    dollar: 0,
    credit: 0,
    debit: 0,
  };
  const [saleCash, setSaleCash] = useState(saleCashSchema);

  const isSelected = (method: string) => payMethod === method;

  const handlePayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value) || 0;
    setPay(value);
  };

  const handlePayAdd  = () => {
    setPayTotal((prevPayTotal) => {
      setSaleCash((prevSaleCash) => {
        const newSaleCash = { ...prevSaleCash }; // Copia el estado anterior de saleCash
        switch (payMethod) {
          case "efective":
            newSaleCash.efective = pay; // Sumar el nuevo pago al existente
            break;
          case "dollars":
            setPay(pay*18);
            newSaleCash.dollar = (pay); // Sumar el nuevo pago al existente
            break;
          case "credit":
            newSaleCash.credit = pay; // Sumar el nuevo pago al existente
            break;
          case "debit":
            newSaleCash.debit = pay; // Sumar el nuevo pago al existente
            break;
          case "cxc":
            alert("cxc pendiente");
            break;
        }
        return newSaleCash; // Devolver el nuevo objeto de saleCash
      });
      const newPayTotal = prevPayTotal + pay;
      setTotal(subtotal - newPayTotal);
      setPaySucces(() => {
        if (newPayTotal < total) {
          return false;
        }
        return true;
      });  
      return newPayTotal;
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="mr-4 h-2/5 w-1/5 rounded-xl bg-primary-orange text-2xl font-bold">
          Finalizar Compra
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="grid h-4/5 w-full grid-cols-5 grid-rows-8 bg-slate-100">
        <AlertDialogHeader className="col-start-1 col-end-6 row-start-1 row-end-1">
          <AlertDialogTitle className="text-5xl font-bold">
            Metodo de pago
          </AlertDialogTitle>
        </AlertDialogHeader>

        <div className="col-start-1 col-end-6 row-start-2 row-end-2 mt-4 flex items-center justify-between">
          {["credit", "debit", "cxc", "efective", "dollars"].map((method) => (
            <Button
              key={method}
              className={`h-full ${
                isSelected(method) ? "bg-primary-orange" : "bg-gray-300"
              }`}
              onClick={() => setPayMethod(method)}
            >
              {method.charAt(0).toUpperCase() + method.slice(1)}
            </Button>
          ))}
        </div>

        <div className="col-start-1 col-end-6 row-start-3 row-end-4 flex items-center justify-between pr-10">
          <input
            className="h-3/4 border border-black"
            type="number"
            value={pay}
            onChange={handlePayChange}
            name=""
            id=""
          />
          <Button onClick={handlePayAdd} className="h-full">
            Agregar
          </Button>
        </div>
        <div className="col-start-1 col-end-6 row-start-4 row-end-8 py-4 text-4xl font-bold">
          <div className="my-4 flex w-3/4 justify-between px-2">
            <h3 className="">Subtotal</h3>
            <h3>{subtotal}</h3>
          </div>
          <div className="my-4 flex w-3/4 justify-between px-2">
            <h3 className="">Pago</h3>
            <h3>${payTotal}</h3>
          </div>
          <Separator className="bg-slate-500" />
          <div className="my-2 flex w-3/4 justify-between px-2">
            <h3 className="">{paySucces ? "Cambio" : "Faltante"}</h3>
            <h3>${total}</h3>
          </div>
        </div>
        <AlertDialogFooter className="col-start-1 col-end-6">
          <AlertDialogCancel className="mx-4 h-full w-1/4 bg-slate-600">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={!paySucces}
            onClick={() => {
              handleCreateCashClose.mutate(saleCash);
            }}
            className="h-full w-1/4"
          >
            Finalizar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
