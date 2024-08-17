import { CardLogin } from "~/components/ui/card-login";
import { SighInForm } from "~/components/ui/sigh-in-form";

const SighinPage = () => {
  return (
    <main className="w-fullflex flex h-screen flex-col items-center justify-center bg-cover bg-center text-white">
      <section className="flex h-full items-center">
        <CardLogin />
        <SighInForm/>
      </section>
    </main>
  );
};
export default SighinPage;
