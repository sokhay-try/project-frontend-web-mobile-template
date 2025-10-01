import { createI18n } from 'vue-i18n'
import enUS from 'vant/es/locale/lang/en-US'
import kmKH from 'vant/es/locale/lang/km-KH'
import { Locale } from 'vant'
import type { PickerColumn } from 'vant'
import { computed } from 'vue'

// This glob pattern matches all .ts files in subdirectories of the 'locales' folder.
const modules = import.meta.glob('../locales/**/*.ts')
const FALLBACK_LOCALE = 'en'

export const supportedLocales = { 'en': 'en', 'kh': 'kh' }
const vantLocales = {
  'kh': kmKH,
  'en': enUS,
} as any

export const languageColumns: PickerColumn = [
  { text: 'English', value: supportedLocales.en },
  { text: 'ភាសាខ្មែរ', value: supportedLocales.kh }
]

export const i18n = setupI18n()
type I18n = typeof i18n

export const locale = computed({
  get() {
    return i18n.global.locale.value
  },
  set(language: string) {
    setLang(language, i18n)
  },
})

function setupI18n() {
  const locale = getI18nLocale()
  const i18n = createI18n({
    locale,
    legacy: false,
    globalInjection: true
  })
  setLang(locale, i18n)
  return i18n
}

async function setLang(lang: string, i18n: I18n) {
  await loadLocaleMsg(lang, i18n)

  document.querySelector('html')?.setAttribute('lang', lang)
  localStorage.setItem('language', lang)
  i18n.global.locale.value = lang

  Locale.use(lang, vantLocales[lang])
}

async function loadLocaleMsg(locale: string, i18n: I18n) {
  const messages: Record<string, unknown> = {}
  // Filter for files belonging to the current locale
  const localeModules = Object.entries(modules).filter(([path]) =>
    path.includes(`/${locale}/`)
  )

  // Asynchronously load all the locale-specific modules
  const loadedModules = await Promise.all(
    localeModules.map(([path, importFn]) => importFn().then((m: any) => m.default))
  )

  // Merge the messages from all loaded files into a single object
  Object.assign(messages, ...loadedModules)

  // Set the merged messages for the current locale
  i18n.global.setLocaleMessage(locale, messages)
}

function getI18nLocale() {
  const storedLocale = localStorage.getItem('language') || navigator.language
  const langs = languageColumns.map(v => v.value as string)
  const foundLocale = langs.find(
    v => v === storedLocale || storedLocale.startsWith(v)
  )
  return foundLocale || FALLBACK_LOCALE
}
