<script lang="ts">
    import Modal from "./Modal.svelte";
    import Box from "../design/Box.svelte";
    import XIcon from "../icons/XIcon.svelte";
    import type {popupCallback} from "./Popup.svelte";
    import SettingsModalSetting from "./SettingsModalSetting.svelte";
    import {THEME_DARK, THEME_LIGHT, isDarkMode, getThemeName} from "$lib/theme";
    import {onDestroy} from "svelte";
    import {languageOptions, changeLocalLocale} from "$lib/i18n";
    import {locale} from "svelte-i18n";

    let closeModal: popupCallback
    export let openModal: popupCallback

    const themes = [
        {"label": "Light", "value": THEME_LIGHT},
        {"label": "Dark", "value": THEME_DARK}
    ]

    function updateTheme(theme: string) {
        isDarkMode.set(theme === THEME_DARK)
    }
</script>

<Modal
    title="Settings"
    bind:closeModal bind:openModal
>
    <div
        class="grid max-w-[18rem] mx-auto gap-x-3 gap-y-5 px-3 py-7 items-center"
        style="grid-template-columns: 40% 60%;"
    >
        <SettingsModalSetting label="Language" options={languageOptions} selectCallback={changeLocalLocale} defaultValue={$locale ? $locale : '?'}/>
        <SettingsModalSetting label="Theme" options={themes} selectCallback={updateTheme} defaultValue={getThemeName($isDarkMode)}/>
    </div>
</Modal>