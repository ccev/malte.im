import '$lib/i18n'
import { locale, waitLocale } from 'svelte-i18n'
import type { LayoutLoad } from './$types'
import {changeLocaleToLocal} from "$lib/i18n";
import { browser } from '$app/environment'

export const load: LayoutLoad = async () => {
    if (browser) {
        changeLocaleToLocal()
    }

    await waitLocale()
}