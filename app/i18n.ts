export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "zh";

/**
 * Next's PageProps typing infers `[locale]` route params as a plain
 * `string`, not our narrower Locale union, so every page/layout takes
 * `params: Promise<{ locale: string }>` and narrows with this — the
 * middleware guarantees only "zh"/"en" ever reach these routes, but this
 * keeps a defensive fallback instead of an undefined-dictionary crash.
 */
export function asLocale(value: string): Locale {
  return (locales as readonly string[]).includes(value) ? (value as Locale) : defaultLocale;
}

export const localeNames: Record<Locale, string> = {
  zh: "中文",
  en: "EN",
};

/**
 * Prefixes an internal path with the current locale. External URLs
 * (http/https), mailto links, and hash-only fragments pass through
 * unchanged since they don't belong to our own locale-routed tree.
 */
export function localeHref(locale: Locale, path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("mailto:")) return path;
  if (path === "/") return `/${locale}`;
  if (path.startsWith("/#")) return `/${locale}${path}`;
  return `/${locale}${path}`;
}
