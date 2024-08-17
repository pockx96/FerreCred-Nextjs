import { LoginForm } from "~/components/ui/login-form";
import { CardLogin } from "~/components/ui/card-login";

const LoginPage = () => {
  return (
    <main className="w-fullflex flex bg-login-bg h-screen flex-col items-center justify-center bg-cover bg-center text-white">
      <section className="flex h-full items-center">
        <CardLogin />
        <LoginForm />
      </section>
    </main>
  );
};
export default LoginPage;
