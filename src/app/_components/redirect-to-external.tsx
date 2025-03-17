"use client";

import { useEffect } from "react";

export default function RedirectToExternal({ url }: { url: string }) {
  useEffect(() => {
    window.location.href = url; // Redirección en cliente
  }, [url]);

  return <p>Redirigiendo...</p>;
}
