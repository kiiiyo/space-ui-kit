export type Locale = string

export const UnknownLocale = Symbol('unknown-locale')
export const defaultLocale: Locale = 'ja'
export const availableLocales: Locale[] = [defaultLocale, 'en']

export function findLocale(current: Locale | undefined): Locale | undefined {
  return availableLocales.find((locale) => current === locale)
}

export const getLocale = (
  locale: string | string[] | undefined
): Locale | typeof UnknownLocale | undefined => {
  if (!locale) {
    return
  }

  const actualLocale = findLocale(String(locale))

  return actualLocale ?? UnknownLocale
}
