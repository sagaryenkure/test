import { getRequestConfig } from "next-intl/server";
import { hasLocale, type Locale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : (routing.defaultLocale as Locale);

  const messages = (
    (await import(`@/messages/${locale}.json`)) as {
      default: Record<string, string>;
    }
  ).default;
  return {
    locale,
    messages,
  };
});
