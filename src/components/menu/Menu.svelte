<script lang="ts">
    import '../../styles/box.css'
    import '../../styles/menu.css'
    import {changeLocalLocale, LANGUAGES} from "$lib/i18n";
    import {locale} from "svelte-i18n";
    import Select from "./Select.svelte";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    interface Timeframe {
        shortLabel: string;
        label: string;
        hours: number
    }
    const timeframes: Timeframe[] = [
        {shortLabel: "6h", label: "6 hours", hours: 6},
        {shortLabel: "24h", label: "24 hours", hours: 24},
        {shortLabel: "7d", label: "7 days", hours: 24 * 7},
        {shortLabel: "30d", label: "30 days", hours: 24 * 30},
    ]
    let currentTimeframe = timeframes[1]

    function changeTimeframe(tf: Timeframe) {
        currentTimeframe = tf
        dispatch("changetimeframe", { "hours": currentTimeframe.hours });
    }

    const languageOptions = Object.keys(LANGUAGES).map(langKey => ({"label": LANGUAGES[langKey], "value": langKey}))
    const timeframeOptions = timeframes.map(tf => ({"label": tf.label, "value": tf}))
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
            defaultOption={currentTimeframe.shortLabel}
            title="Timeframe"
            on:select={(event) => {changeTimeframe(event.detail.value)}}
        />
    </div>
</div>
