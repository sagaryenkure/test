import { useLocale } from "next-intl";
import React from "react";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { routing } from "@/i18n/routing";

const LocalSwitcher = () => {
  const locale: string = useLocale();
  return (
    <div>
      <LocaleSwitcherSelect defaultValue={locale} label="select Lang">
        {routing.locales.map((loc: string) => (
          <option key={loc} value={loc}>
            {loc.toUpperCase()}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </div>
  );
};

export default LocalSwitcher;
