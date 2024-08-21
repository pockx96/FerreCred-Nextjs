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
import { Check, Link } from "lucide-react";



export function LoginForm() {

  return (
    <Card className="flex h-4/5 w-[380px] flex-col justify-between rounded-bl-none rounded-tl-none">
        <CardHeader className="mt-6">
          <CardTitle className="mb-3">Iniciar Sesion</CardTitle>
          <CardDescription>
            Aun no tienes una cuenta? <strong className="text-orange-500" ><a href="/sighin">Regístrate ahora</a></strong>
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className="mb-5" typeof="email" htmlFor="email">
                  Correo electronico
                </Label>
                <Input id="email" placeholder="Ejemplo@gmail.com" />
              </div>
              <div className="flex flex-col mt-12 space-y-1.5">
                <Label className="mb-5" htmlFor="pass">
                  Contraseña
                </Label>
                <Input typeof="pass" id="pass" placeholder="********" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="bg-primary-orange mb-5 w-full">
            <Check className="mr-2 h-4 w-4" /> Iniciar
          </Button>
          <CardDescription>Olvide mi contraseña</CardDescription>
        </CardFooter>
      </Card>
  );
}
