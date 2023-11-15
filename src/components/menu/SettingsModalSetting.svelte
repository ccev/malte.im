<script lang="ts">
    import {_} from "svelte-i18n";

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
<!--TODO: use Select component here since Safari doesn't support centered text in selects (lol)-->
<select
    on:change={e => selectCallback(e.target.value)}
    class="w-full truncate py-3 px-2 text-center text-fore bg-back outline-2 outline outline-outline theme-transition"
    style="-webkit-appearance: none; "
>
    {#each options as option}
        <option value={option.value} selected={option.value === defaultValue}>{$_(option.label)}</option>
    {/each}
</select>
