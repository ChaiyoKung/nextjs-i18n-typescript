import createMiddleware from "next-intl/middleware";
import { localePrefix, locales } from "./navigation";

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  localePrefix: localePrefix,
  // Used when no locale matches
  defaultLocale: "en"
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|th)/:path*"]
};
