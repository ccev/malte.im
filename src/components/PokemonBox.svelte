<script lang="ts">
    import type {Reward, TeamPokemon} from "../@types/gruntApi";
    import Sparkle from "./Sparkle.svelte";
    import Box from "./design/Box.svelte";
    import formatHighNumberWithK from "../utils"

    export let pokemon: TeamPokemon
    export let reward: Reward | undefined
    export let totalGrunt: number
    export let totalReward: number
    export let multipleSlotRewards: boolean

    const formattedMonId = String(pokemon.pokemon.value).padStart(3, "0")
    const formattedFormId = pokemon.form.value > 0 ? pokemon.form.value.toString() : "00"

    function formatPercent(num: number) {
        return (num * 100).toFixed(0) + "%"
    }

    let oneIn = ""
    $: {
        if (reward) {
            oneIn = "1:" + (reward.total / reward.shinies).toFixed(0)
        }
    }

    // function slide(node: HTMLDivElement, initialWidth: number) {
    //     const initialScale = initialWidth / node.clientWidth
    //     return {
    //         easing: sineIn,
    //         duration: 100,
    //         css: (t) => {
    //             const scale = initialScale + t * (1 - initialScale)
    //             const width = node.clientWidth * scale
    //             return `
    //                 width: ${width}px;
    //             `
    //         }
    //     }
    // }

</script>

<Box
    class="cont group text-slate-900 min-w-[3.5rem] h-full flex-none"
    inTheme={false}
>
    <div
            class="bg-[var(--secondary)] text-xs px-0.5 items-center overflow-hidden h-0 min-w-full max-w-[3.5rem] group-hover:max-w-[8rem] group-hover:flex group-hover:h-full"
            style="transition: max-width 200ms;"
    >
        <p>
            {#if reward && reward.shinies > 0}
                Shiny:&#160;{formatHighNumberWithK(reward.shinies)}<br>
            {/if}
            {#if reward && reward.total > 0}
                Reward:&#160;{formatPercent(reward.total / totalReward)}<br>
            {/if}
            Team:&#160;{formatHighNumberWithK(pokemon.total)}
        </p>
    </div>

    <div
            class="bg-[var(--primary)] w-full h-full aspect-square relative group-hover:hidden"
    >
        <img
                class="h-10 w-10 top-1.5 left-0 right-0 mx-auto object-contain absolute"
                src="https://raw.githubusercontent.com/xxleevo/monicons/master/classic/pokemon_icon_{formattedMonId}_{formattedFormId}.png"
                alt={pokemon.pokemon.name}
        >

        <Box
            class="bg-[var(--secondary)] absolute bottom-0 text-center w-full text-[0.7rem]"
            inTheme={false}
        >
            {formatPercent(pokemon.total / totalGrunt)}
        </Box>

        {#if reward && reward.shinies > 0}
            <Box
                class="absolute bg-yellow-200 py-0.5 px-1 -right-0.5 -top-1 text-xs"
                inTheme={false}
            >
                {oneIn}
            </Box>

            <div class="absolute w-6 aspect-square -top-1 -left-1.5 stroke-[47]">
                <Sparkle />
            </div>
            <div class="absolute w-8 aspect-square top-3 -right-2 stroke-[41]">
                <Sparkle />
            </div>
        {/if}
    </div>
</Box>
