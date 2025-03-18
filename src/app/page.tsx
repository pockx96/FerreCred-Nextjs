import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { CardLogin } from "~/app/_components/login/card-login";
import { LoginForm } from "~/app/_components/login/login-form";
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
import { signIn } from "next-auth/react";
import LoginButton from "./_components/login/login-button";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import RedirectToExternal from "./_components/redirect-to-external";
import { Session } from "next-auth";

export default async function Home() {
  const session: Session | null = await getServerAuthSession();
  if (session) {
    let user = (session.user?.name ?? "dafaultuser").replace(/\s+/g, ""); // Asignar el resultado
    const urlRef = `http://green-mallard-910012.hostingersite.com/`;
    console.log(urlRef);
    return <RedirectToExternal url={urlRef} />;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-login-bg bg-cover bg-center">
      <section className="flex w-1/2">
        <Card className="flex min-h-full flex-grow flex-col justify-center rounded-br-none rounded-tr-none border-none bg-[url('~/public/img/login-imagen.png')] bg-cover bg-center px-4 py-2">
          <div className="my-3 h-16 w-16 bg-[url('~/public/img/logo.creditEase-removebg-preview.png')] bg-cover bg-center"></div>
          <p className="my-20 w-2/3 text-3xl font-bold">
            Ofrece credito con facilidad y administra tu negocio{" "}
            <strong className="text-5xl text-primary-orange">.</strong>{" "}
          </p>
        </Card>
        <Card className="flex flex-grow flex-col justify-between rounded-bl-none rounded-tl-none">
          <CardHeader className="mt-6">
            <CardTitle className="mb-3">Iniciar Sesion</CardTitle>
            <CardDescription>
              Aun no tienes una cuenta?{" "}
              <strong className="text-orange-500">
                <a href="/sighin">Regístrate ahora</a>
              </strong>
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex flex-col items-center justify-center gap-4">
                    {session ? (
                      <Link
                        href="/api/auth/signout"
                        className="rounded-full bg-red-500 px-10 py-3 text-white"
                      >
                        Sign out
                      </Link>
                    ) : (
                      <LoginButton />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <Link
                  href={session ? "/api/auth/signout" : "/api/auth/signin"}
                  className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
                >
                  {session ? "Sign out" : "Sign in"}
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
