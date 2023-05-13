<script lang="ts">
    import '../styles/box.css'
    import {changeLocalLocale, LANGUAGES} from "$lib/i18n";
    import {locale} from "svelte-i18n";


    function selectLanguage(event: Event & { target: HTMLSelectElement }) {
        const selectedOptions = event.target.selectedOptions
        if (selectedOptions.length <= 0) {
            return
        }
        const newLang: string = selectedOptions[0].value

        if (!newLang) {
            return;
        }

        changeLocalLocale(newLang)
        event.target.selectedIndex = 0
        event.target.blur()
    }
</script>

<div class="z-50 fixed flex flex-col gap-2 bottom-2 right-4 min-[1110px]:right-auto min-[1110px]:bottom-auto">
    <select
        on:change={selectLanguage}
        name="Language"
        class="box-outline button appearance-none cursor-pointer"
    >
        <option value="" disabled selected hidden>
            {$locale.toUpperCase()}
        </option>
        {#each Object.keys(LANGUAGES) as langKey}
            <option value={langKey}>{LANGUAGES[langKey]}</option>
        {/each}
    </select>
</div>

<style>
    .button {
        @apply bg-slate-50 w-12 aspect-square text-center;
        box-shadow: 0.25rem 0.25rem rgb(15, 23, 42);
    }

    .button:focus {
        @apply translate-x-0.5 translate-y-0.5;
        box-shadow: none;
    }

    .button:hover {
        @apply translate-x-0.5 translate-y-0.5;
        box-shadow: none;
    }
</style>

