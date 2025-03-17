"use client";

import { signIn } from "next-auth/react";

export default function LoginButton() {
  const handleSignIn = async () => {
    await signIn("google", {
      callbackUrl: "https://subdominio.tudominio.com/dashboard",
    });
  };

  return (
    <button
      onClick={handleSignIn}
      className="rounded-full bg-blue-500 px-4 py-2 text-white"
    >
      Iniciar sesión con Google
    </button>
  );
}
