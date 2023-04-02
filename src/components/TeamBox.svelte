<script lang="ts">
    import "./box.css"
    import PokemonBox from "./PokemonBox.svelte"
    import type {TeamPokemon} from "../@types/gruntApi";

    export let key: number
    export let mons: TeamPokemon[]
    export let primary: boolean = false
</script>

<div class="box-outline {primary ? 'reward-box' : 'normal-box'} p-2 flex items-center gap-3">

    <div class="{primary ? 'reward-number' : 'normal-number'} flex-auto flex justify-center font-poppins text-outline text-4xl">
        {key}
    </div>

    <div class="flex gap-2 justify-end w-48">
        {#each mons as mon}
            <PokemonBox monId={mon.pokemon} formId={mon.form}/>
        {/each}
    </div>
</div>

<style>
    .text-outline {
        text-shadow: rgb(15, 23, 42) 2px 0px 0px, rgb(15, 23, 42) 1.75517px 0.958851px 0px, rgb(15, 23, 42) 1.0806px 1.68294px 0px, rgb(15, 23, 42) 0.141474px 1.99499px 0px, rgb(15, 23, 42) -0.832294px 1.81859px 0px, rgb(15, 23, 42) -1.60229px 1.19694px 0px, rgb(15, 23, 42) -1.97999px 0.28224px 0px, rgb(15, 23, 42) -1.87291px -0.701566px 0px, rgb(15, 23, 42) -1.30729px -1.51361px 0px, rgb(15, 23, 42) -0.421592px -1.95506px 0px, rgb(15, 23, 42) 0.567324px -1.91785px 0px, rgb(15, 23, 42) 1.41734px -1.41108px 0px, rgb(15, 23, 42) 1.92034px -0.558831px 0px;
    }

    .reward-number {
        @apply text-yellow-300;
    }

    .reward-box {
        @apply bg-yellow-300;
    }

    .normal-number {
        color: var(--primary);
    }

    .normal-box {
        @apply bg-slate-700;
    }
</style>