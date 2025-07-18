"use client";

import { usePathname, useRouter, routing, type Locale } from "@/i18n/routing";
import { useParams } from "next/navigation";
import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = e.target.value;
    router.replace(
      // @ts-expect-error: params and pathname are assumed valid
      { pathname, params },
      { locale: nextLocale as Locale },
    );
  }

  return (
    <label className="flex items-center gap-2 text-sm font-medium text-white">
      {label}
      <select
        defaultValue={defaultValue}
        onChange={onSelectChange}
        className="h-8 w-[80px] rounded border border-gray-300 bg-white px-2 text-sm text-black focus:outline-none"
        aria-label={label}
      >
        {routing.locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
}
