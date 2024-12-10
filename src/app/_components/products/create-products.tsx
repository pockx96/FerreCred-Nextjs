"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "~/components/ui/separator";
import { ProductType, productSchema } from "../../../validations/productSchema"; // Actualiza esta línea de importación
import { api } from "~/trpc/react";

export function CreateProduct() {
  // Configuramos react-hook-form para que use ProductType como base
  const form = useForm<ProductType>({
    defaultValues: {
      ProductId: "",
      description: "",
      stock: 0,
      priceSale: 0,
      priceBuy: 0,
      weight: 0,
      unit: "",
    },
  });

  const utils = api.useContext();
  const handleCreateProduct = api.product.createProduct.useMutation({
    onSuccess: async () => {
      await utils.product.invalidate();
    },
    onError: (error) => {
      if (error.data?.code === "BAD_REQUEST") {
        alert(error.message); // Opcional, puedes usar un sistema de notificaciones
      }
    },
  });

  const onSubmit = (data: ProductType) => {
    handleCreateProduct.mutate(data);
  };

  return (
    <section className="ml-4 mt-4 w-1/3 text-3xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="ProductId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Código</FormLabel>
                <FormControl>
                  <Input placeholder="Código de barras" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripción</FormLabel>
                <FormControl>
                  <Input placeholder="Taladro" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="unit"
            render={({ field }) => (
              <FormItem className="text-lg">
                <FormLabel>Tipo de Unidad</FormLabel>
                <FormControl>
                  <select
                    className="w-full appearance-none bg-white px-2 py-1"
                    {...field}
                  >
                    <option value="">Seleccione la unidad&hellip;</option>
                    <option value="pieza">Pieza</option>
                    <option value="kilo">Kilos</option>
                    <option value="litro">Litros</option>
                  </select>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="priceSale"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio de Venta</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Precio de venta"
                    {...field}
                    value={field.value ?? ""} // Manejamos valores undefined
                    onChange={(e) => {
                      const parsedValue =
                        e.target.value === "" ? null : Number(e.target.value);
                      field.onChange(parsedValue); // Mandamos el valor convertido
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="priceBuy"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio de Compra</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Precio de compra"
                    {...field}
                    value={field.value ?? ""} // Manejamos valores undefined
                    onChange={(e) => {
                      const parsedValue =
                        e.target.value === "" ? null : Number(e.target.value);
                      field.onChange(parsedValue); // Mandamos el valor convertido
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Inventario</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Stock"
                    {...field}
                    value={field.value ?? ""} // Manejamos valores undefined
                    onChange={(e) => {
                      const parsedValue =
                        e.target.value === "" ? null : Number(e.target.value);
                      field.onChange(parsedValue); // Mandamos el valor convertido
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Peso</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Peso"
                    {...field}
                    value={field.value ?? ""} // Manejamos valores undefined
                    onChange={(e) => {
                      const parsedValue =
                        e.target.value === "" ? null : Number(e.target.value);
                      field.onChange(parsedValue); // Mandamos el valor convertido
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button className="w-3/4" type="submit">
            Guardar
          </Button>
        </form>
      </Form>
    </section>
  );
}
