import createMiddleware from "next-intl/middleware";

const middleware = createMiddleware({
  locales: ["es", "en"],
  defaultLocale: "es",
});

export { middleware }; // Exporta el middleware como `middleware`

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
