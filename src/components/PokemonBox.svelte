<script lang="ts">
    import Sparkle from "./Sparkle.svelte";
    import Box from "./design/Box.svelte";
    import type {Pokemon} from "$lib/uicons";
    import {getPokemon} from "$lib/uicons";
    import CostumeIcon from "./icons/CostumeIcon.svelte";

    export let pokemon: Pokemon
    export let displayChance: number | null = null
    export let shinyOddsTotal: number | undefined = undefined
    export let shinyOddsShinies: number | undefined = undefined

    function formatPercent(num: number) {
        return (num * 100).toFixed(0) + "%"
    }

    function getShinyOdds() {
        if (shinyOddsTotal == undefined || shinyOddsShinies == undefined) {
            return "0/0"
        }
        return "1:" + (shinyOddsTotal / shinyOddsShinies).toFixed(0)
    }

    const canBeShiny = shinyOddsTotal !== undefined && shinyOddsShinies !== undefined && shinyOddsShinies > 0
    const isCostumed = pokemon.costume && pokemon.costume.value > 0
</script>

<Box
    class="text-slate-900 min-w-[3.5rem] h-full flex-none {$$slots.hoverDetails ? 'group' : ''}"
    inTheme={false}
>
    {#if $$slots.hoverDetails}
        <div
            class="bg-[var(--secondary)] text-xs px-0.5 items-center overflow-hidden h-0 min-w-full max-w-[3.5rem] group-hover:max-w-[8rem] group-hover:flex group-hover:h-full"
            style="transition: max-width 200ms;"
        >
            <slot name="hoverDetails"></slot>
        </div>
    {/if}

    <div
        class="bg-[var(--primary)] w-full h-full aspect-square relative group-hover:hidden break-words"
    >
        <img
            class="h-10 w-10 top-1.5 left-0 right-0 mx-auto object-contain absolute"
            src={getPokemon(pokemon)}
            alt={pokemon.form?.value && !pokemon.form.name.includes("_NORMAL") ? pokemon.form.name : pokemon.pokemon.name}
            style="font-size: 0.5rem; line-height: 0.65rem;"
        >

        {#if displayChance != null}
            <Box
                class="bg-[var(--secondary)] absolute bottom-0 text-center w-full text-[0.7rem]"
                inTheme={false}
            >
                {formatPercent(displayChance)}
            </Box>
        {/if}

        {#if canBeShiny || isCostumed}
            <div class="absolute flex gap-0.5 h-5 -right-0.5 -top-1 text-xs">
                {#if isCostumed}
                    <Box
                        class="bg-[var(--secondary)] aspect-square flex justify-center items-center h-full w-fit right-0"
                        inTheme={false}
                    >
                        <CostumeIcon class="h-3.5 stroke-[0.15rem] stroke-slate-900" />
                    </Box>
                {/if}

                {#if canBeShiny}
                    <Box
                        class="bg-yellow-200 py-0.5 px-1 h-full"
                        inTheme={false}
                    >
                        {getShinyOdds()}
                    </Box>
                {/if}
            </div>
        {/if}

        {#if canBeShiny}
            <div class="absolute w-6 aspect-square -top-1 -left-1.5 stroke-[47]">
                <Sparkle/>
            </div>
            <div class="absolute w-8 aspect-square top-3 -right-2 stroke-[41]">
                <Sparkle/>
            </div>
        {/if}
    </div>
</Box>
