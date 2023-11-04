<script lang="ts">
    import Modal from "./Modal.svelte";
    import type {popupCallback} from "./Popup.svelte";
    import SettingsModalSetting from "./SettingsModalSetting.svelte";
    import {getThemeName, isDarkMode, THEME_DARK, THEME_LIGHT} from "$lib/theme";
    import {changeLocalLocale, languageOptions} from "$lib/i18n";
    import {locale} from "svelte-i18n";
    import {_} from "svelte-i18n";

    let closeModal: popupCallback
    export let openModal: popupCallback

    const themes = [
        {"label": "site.theme_light_short", "value": THEME_LIGHT},
        {"label": "site.theme_dark_short", "value": THEME_DARK}
    ]

    function updateTheme(theme: string) {
        isDarkMode.set(theme === THEME_DARK)
    }
</script>

<Modal
    title="site.mobile_settings"
    bind:closeModal bind:openModal
>
    <div
        class="grid max-w-[18rem] mx-auto gap-x-3 gap-y-5 px-3 py-7 items-center"
        style="grid-template-columns: 40% 60%;"
    >
        <SettingsModalSetting
            label={$_("site.input_language")}
            options={languageOptions}
            selectCallback={changeLocalLocale}
            defaultValue={$locale ? $locale : '?'}
        />
        <SettingsModalSetting
            label={$_("site.input_theme")}
            options={themes}
            selectCallback={updateTheme}
            defaultValue={getThemeName($isDarkMode)}
        />
    </div>
</Modal>