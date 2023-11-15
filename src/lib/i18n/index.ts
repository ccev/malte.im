import { browser } from '$app/environment'
import { init, register, locale } from 'svelte-i18n'

export const LANGUAGES = {
    "en": "English",
    "de": "Deutsch",
    "es": "Español",
    "fr": "Français",
    "it": "Italiano",
    "pl": "Polski",
    "tr": "Türkçe",
    "pt": "Português Brasileiro",
    "id": "Bahasa Indonesia",
    "ru": "Русский",
    "zh": "繁體中文",
    "hi": "हिन्दी",
    "ja": "日本語",
    "ko": "한국어",
    "th": "ไทย",
};
export const languageOptions = Object.keys(LANGUAGES).map(langKey => ({"label": LANGUAGES[langKey], "value": langKey}))
const LANG_KEY = "language"
const defaultLocale = Object.keys(LANGUAGES)[0]

Object.keys(LANGUAGES).forEach(langCode => {
    register(langCode, () => import(`./locales/${langCode}.json`))
})

let initialLocale: string | null = null
if (browser) {
    let browserLang = normalizeLocaleKey(window.navigator.language)
    if (browserLang) {
        initialLocale = browserLang
    }
}

export function normalizeLocaleKey(localeKey: string | undefined) {
    if (!localeKey) {
        return null
    }
    localeKey = localeKey.toLowerCase().split("-")[0]
    if (Object.keys(LANGUAGES).includes(localeKey)) {
        return localeKey
    }
    return null
}

export function changeLocaleToLocal() {
    const savedLang = localStorage.getItem(LANG_KEY)
    if (savedLang) {
        locale.set(savedLang)
    }
}

export function changeLocalLocale(newLanguage: string) {
    newLanguage = newLanguage.toLowerCase()
    if (!Object.keys(LANGUAGES).includes(newLanguage)) {
        return
    }
    locale.set(newLanguage)
    localStorage.setItem(LANG_KEY, newLanguage)
}

init({
    fallbackLocale: defaultLocale,
    initialLocale: initialLocale,
})