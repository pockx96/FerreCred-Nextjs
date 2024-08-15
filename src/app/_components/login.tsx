import { cn } from "~/lib/utils";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Check } from "lucide-react";
import { LoginForm } from "~/components/ui/login-form";
import {SighInForm} from "~/components/ui/sigh-in-form"
import { CardLogin } from "~/components/ui/card-login";

type CardProps = React.ComponentProps<typeof Card>;

export function Login({ className, ...props }: CardProps) {
  return (
    <section className="flex h-full items-center">
      <CardLogin/>
      <LoginForm/>
    </section>
  );
}
