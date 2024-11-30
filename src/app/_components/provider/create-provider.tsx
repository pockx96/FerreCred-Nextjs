"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "~/hooks/use-toast";
import { TableProvider } from "./table-provider";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function CreateProvider() {
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
    <section className="ml-4 mt-4 flex w-3/4 bg-slate-400 text-3xl">
      <TableProvider />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6 bg-green-400 px-4"
        >
          <div className="flex justify-around bg-red-500">
            <Button className="" type="submit">
              Nuevo Proveedor
            </Button>
            <Button>Eliminar</Button>
            <Button>Guardar</Button>
          </div>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>RFC</FormLabel>
                <FormControl>
                  <Input placeholder="MHE920615B83" {...field} />
                </FormControl>
                <FormLabel>Empresa</FormLabel>
                <FormControl>
                  <Input placeholder="Empresas Sa de Cv" {...field} />
                </FormControl>
                <FormLabel>Telefono</FormLabel>
                <FormControl>
                  <Input placeholder="638-109-28-93" {...field} />
                </FormControl>
                <FormLabel>Direccion</FormLabel>
                <FormControl>
                  <Input placeholder="av. Lopez portillo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </section>
  );
}
