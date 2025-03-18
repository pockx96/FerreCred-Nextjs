/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    // Asegúrate de que esta opción está habilitada
  },
  eslint: {
    ignoreDuringBuilds: true, // 🔥 No bloquea el build por errores ni warnings de ESLint
  },
};

export default config;
