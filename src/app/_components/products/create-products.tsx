"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { toast } from "~/hooks/use-toast";
import { Section } from "lucide-react";
import { Separator } from "~/components/ui/separator";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function CreateProduct() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <section className="ml-4 mt-4 w-1/3 text-3xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Codigo</FormLabel>
                <FormControl>
                  <Input placeholder="Codigo de barras" {...field} />
                </FormControl>
                <FormLabel>Descripcion</FormLabel>
                <FormControl>
                  <Input placeholder="Taladro" {...field} />
                </FormControl>
                <FormLabel>Tipo de Unidad</FormLabel>
                <div className="relative border border-gray-300 bg-white text-lg text-gray-800 shadow-lg">
                  <select
                    className="w-full appearance-none bg-white px-2 py-1"
                    name="whatever"
                    id="frm-whatever"
                  >
                    <option value="">Seleccione la unidad&hellip;</option>
                    <option value="1">Pieza</option>
                    <option value="2">Kilos</option>
                    <option value="3">Litros</option>
                  </select>
                  <div className="pointer-events-none absolute bottom-0 right-0 top-0 flex items-center border-l px-2 text-gray-700">
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <FormLabel>Precio de Venta</FormLabel>
                <FormControl>
                  <Input placeholder="$80" {...field} />
                </FormControl>
                <Separator />
                <div className="flex h-16 flex-col justify-between">
                  <FormLabel className="text-xl font-bold">
                    Inventario
                  </FormLabel>
                  <FormLabel>Hay</FormLabel>
                </div>
                <FormControl>
                  <Input placeholder="1" {...field} />
                </FormControl>
                <FormDescription>En esto momento</FormDescription>
                <FormMessage />
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
