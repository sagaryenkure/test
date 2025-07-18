import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "jp"],

  // Used when no locale matches
  defaultLocale: "en",
  pathnames: {
    "/blogs": {
      en: "/blogs",
      jp: "/ブログ",
    },
  },
});

// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
