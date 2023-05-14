<script lang="ts">
    import '../../styles/box.css'
    import '../../styles/menu.css'
    import {changeLocalLocale, LANGUAGES} from "$lib/i18n";
    import {locale} from "svelte-i18n";
    import Select from "./Select.svelte";

    const languageOptions = Object.keys(LANGUAGES).map(langKey => ({"label": LANGUAGES[langKey], "value": langKey}))
    const timeframeOptions = [
        {"label": "24h", "value": 24},
        {"label": "7d", "value": 7 * 24},
        {"label": "30d", "value": 30 * 24}
    ]
</script>

<div class="z-30 fixed bottom-2 right-3 min-[1145px]:right-auto min-[1145px]:bottom-auto">
    <div class="flex flex-col-reverse gap-3 min-[1145px]:flex-col">
        <Select
            options={languageOptions}
            defaultOption={$locale.toUpperCase()}
            title="Language"
            on:select={(event) => changeLocalLocale(event.detail.value)}
        />
        <Select
            options={timeframeOptions}
            defaultOption="24h"
            title="Timeframe"
            on:select={() => {}}
        />
    </div>
</div>
