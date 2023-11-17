<script lang="ts">
    import Box from "./design/Box.svelte";
    import PokemonBox from "./PokemonBox.svelte"
    import type {Reward, TeamPokemon} from "../@types/gruntApi";
    import formatHighNumberWithK from "../utils"

    export let key: number
    export let mons: TeamPokemon[]
    export let rewards: Reward[]
    export let totalGrunt: number
    export let totalReward: number
    export let primary: boolean = false
    export let multipleSlotRewards: boolean

    function getReward(mon: TeamPokemon) {
        if (primary) {
            for (const reward of rewards) {
                if (reward.pokemon.value === mon.pokemon.value && reward.form.value === mon.form.value) {
                    return reward
                }
            }
        }
        return undefined
    }
</script>

<Box
    class="{primary ? 'bg-yellow-300' : 'bg-slate-700'} p-2 flex items-center gap-3 w-full"
    inTheme={false}
>

    <div
        class="{primary ? 'reward-number' : 'normal-number'} flex-auto flex justify-center font-poppins italic text-outline text-4xl">
        {key}
    </div>

    <div class="flex gap-2 justify-end w-[11.5rem] items-stretch h-14">
        {#each mons as mon}
            {@const reward = getReward(mon)}
            <PokemonBox
                pokemon={mon}
                displayChance={mon.total / totalGrunt}
                shinyOddsShinies={reward?.shinies}
                shinyOddsTotal={reward?.total}
            >
                <p slot="hoverDetails">
                    {#if reward && reward.shinies > 0}
                        Shiny:&#160;{formatHighNumberWithK(reward.shinies)}<br>
                    {/if}
                    {#if reward && reward.total > 0}
                        Reward:&#160;{(reward.total / totalReward * 100).toFixed(0)}%<br>
                    {/if}
                    Team:&#160;{formatHighNumberWithK(mon.total)}
                </p>
            </PokemonBox>
        {/each}
    </div>
</Box>

<style>
    .text-outline {
        text-shadow: rgb(15, 23, 42) 2px 0 0,
        rgb(15, 23, 42) 1.75517px 0.958851px 0,
        rgb(15, 23, 42) 1.0806px 1.68294px 0,
        rgb(15, 23, 42) 0.141474px 1.99499px 0,
        rgb(15, 23, 42) -0.832294px 1.81859px 0,
        rgb(15, 23, 42) -1.60229px 1.19694px 0,
        rgb(15, 23, 42) -1.97999px 0.28224px 0,
        rgb(15, 23, 42) -1.87291px -0.701566px 0,
        rgb(15, 23, 42) -1.30729px -1.51361px 0,
        rgb(15, 23, 42) -0.421592px -1.95506px 0,
        rgb(15, 23, 42) 0.567324px -1.91785px 0,
        rgb(15, 23, 42) 1.41734px -1.41108px 0,
        rgb(15, 23, 42) 1.92034px -0.558831px 0;
    }

    .reward-number {
        @apply text-yellow-300;
    }

    .normal-number {
        color: var(--primary);
    }
</style>