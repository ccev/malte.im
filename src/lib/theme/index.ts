import {writable} from "svelte/store"
import type {Writable} from "svelte/store"

export const THEME_DARK = "dark"
export const THEME_LIGHT = "light"

export const isDarkMode: Writable<boolean> = writable()

export function toggleTheme(document: Document) {
    isDarkMode.update(value => !value)
}

export function getThemeName(isDarkMode: boolean) {
    return isDarkMode ? THEME_DARK : THEME_LIGHT
}