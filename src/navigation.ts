import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales: Array<string> = ["en", "th"];
export const localePrefix = "always";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
