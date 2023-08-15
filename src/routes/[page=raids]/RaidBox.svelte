<script lang="ts">
    import Box from "../../components/design/Box.svelte";
    import "../../styles/types.css"
    import "../../styles/raids.css"
    import PokemonBox from "../../components/PokemonBox.svelte";
    import formatHighNumberWithK from "../../utils";
    import Sparkle from "../../components/Sparkle.svelte";
    import type {Enum} from "../../@types/api";
    import type {Raid} from "../../@types/raidApi";
    import {_} from "svelte-i18n"
    import {getPokemon} from "$lib/uicons";

    export let level: Enum
    export let raids: Raid[]
    export let percentage: number

    console.log(JSON.stringify(level))
    console.log(JSON.stringify(raids))
</script>

<Box
    class="w-full min-[990px]:max-w-none h-full divide-slate-900 divide-y-2 bg-slate-800 text-slate-900"
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

    <div class="grid min-[990px]:grid-cols-2 gap-3 py-2 px-3">
        {#each raids as mon, key}
            <Box class="bg-slate-700 w-full mx-auto flex justify-center p-2" inTheme={false}>
                <div class="flex gap-3">
                    <Box
                        class="text-slate-900 min-w-[3.5rem] h-full flex-none"
                        inTheme={false}
                    >
                        <div
                            class="bg-[var(--primary)] w-full h-full aspect-square relative"
                        >
                            <img
                                class="h-10 w-10 top-1.5 left-0 right-0 mx-auto object-contain absolute"
                                src={getPokemon(mon)}
                                alt={mon.pokemon.name}
                            >

                            <Box
                                class="bg-[var(--secondary)] absolute bottom-0 text-center w-full text-[0.7rem]"
                                inTheme={false}
                            >
                                10%
                            </Box>
                        </div>
                    </Box>


                    <div class="w-fit flex flex-col justify-around gap-0.5">
                        <div class="flex w-full gap-0.5 whitespace-nowrap">
                            <Box class="bg-[var(--secondary)] flex-shrink basis-1/2 h-6 px-1 flex items-center justify-center">
                                <span>CP 1367</span>
                            </Box>
                            <Box class="bg-[var(--secondary)] basis-1/2 h-6 px-2 flex gap-1 items-center justify-center">
                                <svg class="h-2.5 fill-slate-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"/></svg>
                                <svg class="h-2.5 fill-slate-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96H96zm-6.8 52c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3L89.2 372zm160 0c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3L249.2 372zm124.9 64.6L409.2 372c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3z"/></svg>
<!--                                <svg class="h-3 fill-slate-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">&lt;!&ndash;! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. &ndash;&gt;<path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/></svg>-->
                                <span>1568</span>
                            </Box>
                        </div>


                        <div class="flex h-5 gap-1.5 justify-between">
                            <div class="flex h-full gap-0.5">
                                <Box class="bg-slate-300 flex-none aspect-square h-full flex items-center justify-center">
                                    <span>1</span>
                                </Box>
                                <Box class="bg-rose-500 flex-none aspect-square h-full flex items-center justify-center">
                                    <span>2</span>
                                </Box>
                                <Box class="bg-orange-500 flex-none aspect-square h-full flex items-center justify-center">
                                    <span>3</span>
                                </Box>
                                <Box class="bg-yellow-400 flex-none aspect-square h-full flex items-center justify-center">
                                    <span>4</span>
                                </Box>
                                <Box class="bg-green-400 flex-none aspect-square h-full flex items-center justify-center">
                                    <span>5</span>
                                </Box>
                            </div>
                            <Box class="bg-[var(--secondary)] px-1 h-full flex items-center justify-center">
                                <svg class="h-3 fill-slate-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
                            </Box>
                        </div>

                    </div>
                </div>

<!--                <div class="bg-slate-300 py-0.5 border-t-2 border-t-slate-900 flex items-center justify-center">-->
<!--                    <span>Pokebattler >></span>-->
<!--                </div>-->
            </Box>
        {/each}
    </div>

</Box>
