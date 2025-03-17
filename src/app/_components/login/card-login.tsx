import { Card } from "~/components/ui/card";

export function CardLogin() {
  return (
    <Card className="flex h-full w-[580px] flex-col justify-center rounded-br-none rounded-tr-none bg-[url('~/public/img/login-imagen.png')] bg-cover bg-center px-4">
      <div className="bg-cente h-16 w-16 bg-[url('~/public/img/logo.creditEase-removebg-preview.png')] bg-cover"></div>
      <p className="w-2/3 text-3xl font-bold">
        Ofrece credito con facilidad y administra tu negocio{" "}
        <strong className="text-5xl text-primary-orange">.</strong>{" "}
      </p>
    </Card>
  );
}
