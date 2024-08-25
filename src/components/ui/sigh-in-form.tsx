"use client";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Check } from "lucide-react";
import { Separator } from "~/components/ui/separator";
import { Checkbox } from "./checkbox";
import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";

export async function SighInForm() {
  return (
    <Card className="flex h-4/5 w-[380px] flex-col justify-between rounded-bl-none rounded-tl-none">
      <CardHeader>
        <CardTitle className="mb-3">Registrate Ahora!</CardTitle>
        <CardDescription>
          Empieza a llevar control de tu negocio a otro nivel
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label className="mb-5" typeof="email" htmlFor="email">
                Nombre
              </Label>
              <Input id="name" placeholder="Nombre Completo" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label className="mb-5" typeof="email" htmlFor="email">
                Correo electronico
              </Label>
              <Input id="email" placeholder="Ejemplo@gmail.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label className="mb-5" htmlFor="pass">
                Contraseña
              </Label>
              <Input typeof="pass" id="pass" placeholder="********" />
            </div>
            <Separator className="my-2" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button className="mb-4 w-3/4 rounded-full border border-gray-400 bg-white text-black">
          Registrate con google
        </Button>
        <div className="mb-4 flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
        <Button className="mb-5 w-full bg-primary-orange">
          <Check className="mr-2 h-4 w-4" /> Registrarse
        </Button>
      </CardFooter>
    </Card>
  );
}
