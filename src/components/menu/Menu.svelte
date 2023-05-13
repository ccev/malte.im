<script lang="ts">
    import '../../styles/box.css'
    import '../../styles/menu.css'
    import {changeLocalLocale, LANGUAGES} from "$lib/i18n";
    import {locale} from "svelte-i18n";
    import Select from "./Select.svelte";

    const languageOptions = Object.keys(LANGUAGES).map(langKey => ({"label": LANGUAGES[langKey], "value": langKey}))
</script>

<div class="z-30 fixed bottom-2 right-3 min-[1145px]:right-auto min-[1145px]:bottom-auto">
    <div class="flex flex-col-reverse gap-3 min-[1145px]:flex-col">
        <Select
            options={languageOptions}
            defaultOption={$locale.toUpperCase()}
            on:select={(event) => changeLocalLocale(event.detail.value)}
        />
    </div>
</div>
