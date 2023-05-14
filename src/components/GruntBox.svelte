<script lang="ts">
    import "../styles/box.css"
    import "../styles/types.css"
    import TeamBox from "./TeamBox.svelte";
    import formatHighNumberWithK from "../utils"
    import { _, locale } from "svelte-i18n"
    import type {TeamPokemon, DetailedCharacter} from "../@types/gruntApi"

    import head_4 from "$lib/images/heads/head_4.png";
    import head_5 from "$lib/images/heads/head_5.png";
    import head_41 from "$lib/images/heads/head_41.png";
    import head_42 from "$lib/images/heads/head_42.png";
    import head_43 from "$lib/images/heads/head_43.png";
    import head_44 from "$lib/images/heads/head_44.png";

    export let char: DetailedCharacter

    let teamPokemon: TeamPokemon[][] = [[], [], []]
    let rewardSlots: Set<number> = new Set()
    let oneIn: string

    $: {
        teamPokemon = [[], [], []]
        char.team.forEach(teamMon => teamPokemon[teamMon.slot].push(teamMon))

        rewardSlots.clear()
        char.rewards.forEach(reward => {
            for (const teamMon of char.team) {
                if (teamMon.pokemon.value === reward.pokemon.value && teamMon.form.value === reward.form.value) {
                    rewardSlots.add(teamMon.slot)
                    break
                }
            }
        })

        oneIn = "1:" + (char.groupTotal / char.thisTotal).toFixed(0)
    }

    const heads = {
        4: head_4,
        5: head_5,
        41: head_41,
        42: head_42,
        43: head_43,
        44: head_44,
    }
    let head = heads[char.details.gender]
    if (!head) {
        head = head_5
    }

    const cssId = char.details.name.toLowerCase();
    const style = `--primary: var(--${cssId}-prim, #94a3b8);
        --secondary: var(--${cssId}-seco, #e2e8f0);
        --background: var(--${cssId}-bg, var(--default-bg));
        --bg-color-1: var(--${cssId}-bg-1, hsl(215, 26%, 23%));
        --bg-color-2: var(--${cssId}-bg-2, hsl(217, 26%, 27%));`


    // function formatPercent(num: number) {
    //     return (num * 100).toFixed(2)+"%"
    // }

    function formatHighNumber(num: number) {
        return num.toLocaleString("en-US")
    }

    let quote: string
    const quoteKey = `grunt_quotes.${char.character.value}`
    let currentQuoteIndex = 1
    locale.subscribe(() => {
        if (char.details.quotes == 1) {
            quote = $_(quoteKey)
        } else {
            quote = $_(`${quoteKey}_${currentQuoteIndex}`)
        }
    })

    function cycleQuote() {
        if (char.details.quotes == 1) {
            return
        }
        currentQuoteIndex = currentQuoteIndex % char.details.quotes + 1
        quote = $_(`${quoteKey}_${currentQuoteIndex}`)
    }

</script>

<div class="w-full h-full max-w-xs">
    <div
        class="h-full divide-slate-900 divide-y-2 bg-slate-800 box-outline rounded-sm flex flex-col"
        style={style}
    >

        <div class="w-full h-fit header-default flex flex-row p-3 justify-center items-center gap-3 flex-grow">
            <div class="box-secondary flex-none group">
                <div class="uppercase box-outline text-center py-1.5 px-2">
                    {$_(`grunt_names.${char.character.value}`)}
                </div>
                <div
                        class="flex text-center text-[0.7rem] mt-0.5 gap-0.5"
                >
                    <div class="basis-1/2 box-outline px-2 py-1 group-hover:hidden">
                        {oneIn}
                    </div>
                    <div class="basis-1/2 box-outline px-2 py-1 group-hover:hidden">
                        <!--                    #&#160;-->
                        {formatHighNumberWithK(char.thisTotal)}
                    </div>
                    <div class="box-outline basis-full px-2 py-1 hidden group-hover:inline">
                        {formatHighNumber(char.thisTotal)}&#160;/&#160;{formatHighNumber(char.groupTotal)}
                    </div>
                </div>
            </div>

            <div
                on:mouseenter={cycleQuote}
                on:click={cycleQuote}
                class="box-outline box-primary h-fit items-center pl-2 gap-2 grid w-full"
                style="grid-template-columns: 2.5rem minmax(0, 1fr);"
            >
                <img
                        class="h-16 object-contain"
                        src={head}
                        alt="Male Grunt"
                >
                <p class="italic text-xs py-1 pr-2 text-center break-words">
                    “{quote}”
                </p>
            </div>
        </div>

        <div class="p-3 grid gap-2.5 flex-grow-0">
            {#each teamPokemon as mons, key}
                <TeamBox
                    key={key + 1}
                    mons={mons}
                    totalGrunt={char.thisTotal}
                    totalReward={char.rewardTotal}
                    rewards={char.rewards}
                    primary={rewardSlots.has(key)}
                    multipleSlotRewards={rewardSlots.size > 1}
                />
            {/each}
        </div>

    </div>
</div>
