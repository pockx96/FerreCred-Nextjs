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
import { useContext, useState } from "react";
import { Separator } from "~/components/ui/separator";
import { api } from "~/trpc/react";
import { ProductsContext } from "./sell-cart";
import { CashType } from "~/server/api/routers/cash-register-close";
import { date } from "zod";
import { productRouter } from "~/server/api/routers/products";

type SellCartProps = {
  totalPrice: number;
  clearProducts: () => void;
}; //Importaciones de sell-cart.tsx

export function ButtonFinish({ totalPrice, clearProducts }: SellCartProps) {
  const subtotal = totalPrice;
  const [total, setTotal] = useState(subtotal);
  const [pay, setPay] = useState(0);
  const [payTotal, setPayTotal] = useState(0);
  const [paySucces, setPaySucces] = useState(false);
  const [payMethod, setPayMethod] = useState("efective");
  const selectProducts = useContext(ProductsContext);

  const utils = api.useUtils();

  const cashesCloseQuery = api.cashClose.getAll.useQuery();

  let now: Date = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  const nowDate: Date = new Date(year, month, day);

  /// INVENTORY GESTION ///

  const handleInventory = async () => {
    const productsInventoryQuery = api.product.getAll.useQuery();
    const productsInventory = productsInventoryQuery.data;

    if (!productsInventory) {
      alert("No se pudo cargar el inventario");
      return;
    }

    try {
      for (const productInventory of productsInventory) {
        for (const product of selectProducts) {
          if (product.ProductId == productInventory.ProductId) {
            const discount = product.stock;
            productInventory.stock -= discount;
            updateProductInventory.mutate({
              ProductId: productInventory.ProductId,
              newStock: productInventory.stock,
            });
          }
        }
      }
    } catch (e) {
      alert("Error al actualizar el inventario");
    }
  };

  const updateProductInventory = api.product.update.useMutation({
    onSuccess: async () => {
      await utils.product.invalidate();
    },
  });

  /// CASH GESTION ////

  const handleCreateCashClose = api.cashClose.createCashRegister.useMutation({
    onSuccess: async () => {
      await utils.cashRegister.invalidate();
      setPaySucces(false);
      setPayTotal(0);
      setPay(0);
    },
  });

  const HandleCashClose = (cashUpdate: CashType) => {
    alert("working funcion cash");
    const cashesClose = cashesCloseQuery.data;
    if (!cashesClose) {
      alert("No se pudo cargar el efectivo en caja");
      return;
    }
    if (cashesClose.length === 0) {
      handleCreateCashClose.mutate({
        CashRegisterCloseid: saleCash.CashRegisterCloseid,
        user: saleCash.user,
        efective: saleCash.efective,
        dollar: saleCash.dollar,
        credit: saleCash.credit,
        debit: saleCash.debit,
        date: saleCash.date,
      });
    }

    for (let cash of cashesClose) {
      let i = 1;
      console.log(i + ": " + cash);
      if (cash.date !== nowDate) {
        handleCreateCashClose.mutate({
          CashRegisterCloseid: cash.CashRegisterCloseid,
          user: cash.user,
          efective: cash.efective,
          dollar: cash.dollar,
          credit: cash.credit,
          debit: cash.debit,
          date: cash.date,
        });
        alert("Se creo el corte" + cash);
        break; // Termina el loop al encontrar el primer elemento que cumple la condición
      } else {
        cash = cashUpdate;
        alert("Se actualizo el corte" + cash);
      }
      i++;
    }
  };

  /// SALE GESTION ///
  const handleCreateSale = api.sale.create.useMutation({
    onSuccess: async () => {
      await utils.sale.invalidate();
    },
  });

  const saleCashSchema = {
    CashRegisterCloseid: 1,
    user: "testing",
    efective: 0,
    dollar: 0,
    credit: 0,
    debit: 0,
    date: nowDate,
  };
  const [saleCash, setSaleCash] = useState(saleCashSchema);

  /// PAY GESTION ///

  const isSelected = (method: string) => payMethod === method;

  const handlePayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value) || 0;
    setPay(value);
  };

  const handlePayAdd = () => {
    setPayTotal((prevPayTotal) => {
      setSaleCash((prevSaleCash) => {
        const newSaleCash = { ...prevSaleCash };
        switch (payMethod) {
          case "efective":
            newSaleCash.efective = pay; // Sumar el nuevo pago al existente
            break;
          case "dollars":
            setPay(pay * 18);
            newSaleCash.dollar = pay; // Sumar el nuevo pago al existente
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
            <h3>${total.toFixed(2)}</h3>
          </div>
        </div>
        <AlertDialogFooter className="col-start-1 col-end-6">
          <AlertDialogCancel className="mx-4 h-full w-1/4 bg-slate-600">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={!paySucces}
            onClick={() => {
              clearProducts();
              HandleCashClose(saleCash);
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
