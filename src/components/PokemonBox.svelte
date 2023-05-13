<script lang="ts">
    import "../styles/box.css"
    import type {TeamPokemon, Reward} from "../@types/gruntApi";
    import Sparkle from "./Sparkle.svelte";
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
    if (reward) {
        oneIn = "1:" + (reward.total / reward.shinies).toFixed(0)
    }
</script>

<div class="group box-outline text-slate-900">
    <div class="box-secondary hidden h-14 w-fit text-xs px-0.5 justify-center group-hover:flex">
        <p class="my-auto">
            {#if reward && reward.shinies > 0}
                Shiny:&#160;{formatHighNumberWithK(reward.shinies)}<br>
            {/if}
            {#if reward && reward.total > 0}
                Reward:&#160;{formatPercent(reward.total / totalReward)}<br>
            {/if}
            Team:&#160;{formatHighNumberWithK(pokemon.total)}
        </p>
    </div>
    <div class="box-primary h-14 aspect-square relative group-hover:hidden">
        <img
                class="h-10 w-10 top-1.5 left-2 object-contain absolute"
                src="https://raw.githubusercontent.com/xxleevo/monicons/master/classic/pokemon_icon_{formattedMonId}_{formattedFormId}.png"
                alt={pokemon.pokemon.name}
        >

        <div class="box-outline box-secondary absolute bottom-0 justify-center flex divide-slate-900 divide-x-2 w-full h-5 text-[0.7rem]">
            <!--        {#if multipleSlotRewards && reward && reward.total}-->
            <!--            <div class="text-center basis-1/2">-->
            <!--                {formatPercent(pokemon.total / totalGrunt)}-->
            <!--            </div>-->
            <!--            <div class="text-center basis-1/2">-->
            <!--&lt;!&ndash;                1:{(reward.total / reward.shinies).toFixed(0)}&ndash;&gt;-->
            <!--                {formatPercent(reward.total / totalReward)}-->
            <!--            </div>-->
            <!--        {:else}-->
            <!--            <div>-->
            <!--                {formatPercent(pokemon.total / totalGrunt)}-->
            <!--            </div>-->
            <!--        {/if}-->
            <div>
                {formatPercent(pokemon.total / totalGrunt)}
            </div>
        </div>

        {#if reward && reward.shinies > 0}
            <div class="absolute box-outline bg-yellow-200 py-0.5 px-1 -right-0.5 -top-1 w-fit h-fit text-xs">
                {oneIn}
            </div>

            <div class="absolute w-6 aspect-square -top-1 -left-1.5 stroke-[47]">
                <Sparkle />
            </div>
            <div class="absolute w-8 aspect-square top-3 -right-2 stroke-[41]">
                <Sparkle />
            </div>
        {/if}
    </div>
</div>
