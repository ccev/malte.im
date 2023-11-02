<script lang="ts">
    import Box from "../design/Box.svelte";
    import type {ChangeEventHandler} from "svelte/elements";

    type Option = {
        label: string,
        value: string
    }

    export let label: string
    export let options: Array<Option>
    export let selectCallback: (value: string) => void
    export let defaultValue: string
</script>


<span class="w-full">
    {label}
</span>
<select
    on:change={e => selectCallback(e.target.value)}
    class="w-full truncate py-3 px-2 text-center text-fore bg-back outline-2 outline outline-outline theme-transition"
>
    {#each options as option}
        <option value={option.value} selected={option.value === defaultValue}>{option.label}</option>
    {/each}
</select>
