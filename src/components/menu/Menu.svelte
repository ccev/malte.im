<script lang="ts">
    import './menu.css'
    import {LANGUAGES} from "$lib/i18n";
    import Select from "./Select.svelte";
    import {createEventDispatcher} from 'svelte';
    import {AnchorX, AnchorY} from "./Select.svelte";

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

<Select
    options={timeframeOptions}
    defaultOption={currentTimeframe.shortLabel}
    title="Timeframe"
    anchorY={AnchorY.Bottom}
    on:select={(event) => {changeTimeframe(event.detail.value)}}
/>