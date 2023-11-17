<script lang="ts">
    import Box from "../../components/design/Box.svelte";
    import "../../styles/types.css"
    import "../../styles/raids.css"
    import type {Enum} from "../../@types/api";
    import type {Raid} from "../../@types/raidApi";
    import {_} from "svelte-i18n"
    import {getPokemon} from "$lib/uicons";
    import DifficultyBox from "./DifficultyBox.svelte";
    import Sunny from "../../components/icons/weather/Sunny.svelte";
    import Cloudy from "../../components/icons/weather/Cloudy.svelte";
    import PartlyCloudy from "../../components/icons/weather/PartlyCloudy.svelte";
    import Fog from "../../components/icons/weather/Fog.svelte";
    import Windy from "../../components/icons/weather/Windy.svelte";
    import Rainy from "../../components/icons/weather/Rainy.svelte";
    import Snowy from "../../components/icons/weather/Snowy.svelte";
    import PokemonBox from "../../components/PokemonBox.svelte";

    export let level: Enum
    export let raids: Raid[]
    export let percentage: number

    const totalMons = raids.reduce((sum, raid) => sum + raid.total, 0);
</script>


<Box
    class="divide-slate-900 divide-y-2 bg-slate-800 text-slate-900"
    inTheme={false}
    rounded
    --primary="var(--{level.value}-prim, #94a3b8)"
    --secondary="var(--{level.value}-seco, #e2e8f0)"
    --bg-color-1="var(--{level.value}-bg-1, hsl(215, 26%, 23%))"
    --bg-color-2="var(--{level.value}-bg-2, hsl(217, 26%, 27%))"
>
    <!--Head-->

    <div class="header-default">
        <div class="flex py-2 px-3 gap-3">
            <Box class="bg-[var(--secondary)] px-4 py-1.5">
                {$_('raid_levels.' + level.value)}
            </Box>
            <Box class="bg-[var(--secondary)] px-4 py-1.5">
                {(percentage * 100).toFixed(0)}%
            </Box>
        </div>
    </div>

    <div
        class="grid w-full justify-items-center gap-3 py-2 px-3 justify-center"
        style="grid-template-columns: repeat(var(--raid-box-columns, 1), minmax(220px, 250px));"
    >
        {#each raids as mon, key}
            <Box class="bg-slate-700 w-full flex justify-center p-2 max-w-[270px]" inTheme={false}>
                <div class="flex gap-3">
                    <PokemonBox
                        pokemon={mon}
                        displayChance={mon.total / totalMons}
                    />

                    <div class="w-fit flex flex-col justify-around gap-0.5">
                        <div class="flex w-full gap-0.5 whitespace-nowrap">
                            <Box class="bg-[var(--secondary)] flex-shrink basis-1/2 h-6 px-1 flex items-center justify-center">
                                <span>{$_("site.n_cp", { values: {n: mon.stats?.cp_20} })}</span>
                            </Box>
                            <Box
                                class="bg-[var(--secondary)] basis-1/2 h-6 px-1 flex gap-1 items-center w-full justify-center stroke-slate-900 stroke-[8px] fill-none"
                                style="stroke-linecap: round; stroke-linejoin: round;"
                            >
                                {#if mon.stats?.weather_boost.includes(1)}
                                    <Sunny />
                                {/if}
                                {#if mon.stats?.weather_boost.includes(2)}
                                    <Rainy />
                                {/if}
                                {#if mon.stats?.weather_boost.includes(3)}
                                    <PartlyCloudy />
                                {/if}
                                {#if mon.stats?.weather_boost.includes(4)}
                                    <Cloudy />
                                {/if}
                                {#if mon.stats?.weather_boost.includes(5)}
                                    <Windy />
                                {/if}
                                {#if mon.stats?.weather_boost.includes(6)}
                                    <Snowy />
                                {/if}
                                {#if mon.stats?.weather_boost.includes(7)}
                                    <Fog />
                                {/if}
                                <span>{mon.stats?.cp_25}</span>
                            </Box>
                        </div>


                        <a
                            class="flex h-5 gap-1.5 justify-between"
                            href="https://www.pokebattler.com/raids/{mon.stats?.pokebattler_name}"
                            target="_blank"
                        >
                            <div class="flex h-full gap-0.5">
                                {#each [1, 2, 3, 4, 5] as playerCount}
                                    <DifficultyBox playerCount={playerCount} raid={mon}/>
                                {/each}
                            </div>
                            <Box class="bg-[var(--secondary)] px-1 h-full flex items-center justify-center">
                                <svg class="h-3 fill-slate-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
                            </Box>
                        </a>

                    </div>
                </div>

<!--                <div class="bg-slate-300 py-0.5 border-t-2 border-t-slate-900 flex items-center justify-center">-->
<!--                    <span>Pokebattler >></span>-->
<!--                </div>-->
            </Box>
        {/each}
    </div>
</Box>
