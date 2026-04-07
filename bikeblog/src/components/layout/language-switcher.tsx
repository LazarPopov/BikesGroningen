"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, translatePathname, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </span>
      <div className="flex rounded-full border border-slate-200 bg-slate-50 p-1">
        {locales.map((targetLocale) => {
          const isActive = targetLocale === locale;

          return (
            <Link
              key={targetLocale}
              href={translatePathname(pathname, targetLocale)}
              className={`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${
                isActive
                  ? "bg-slate-950 text-white"
                  : "text-slate-600 hover:bg-white hover:text-slate-950"
              }`}
            >
              {targetLocale}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
