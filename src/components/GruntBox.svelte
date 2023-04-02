<script lang="ts">
    import "./box.css"
    import "./types.css"
    import TeamBox from "./TeamBox.svelte";
    import {CHARACTER_MAP, Gender} from "../gruntData"
    import type {Character, TeamPokemon, Reward} from "../@types/gruntApi"

    import head_4 from "$lib/images/heads/head_4.png";
    import head_5 from "$lib/images/heads/head_5.png";
    import head_41 from "$lib/images/heads/head_41.png";
    import head_42 from "$lib/images/heads/head_42.png";
    import head_43 from "$lib/images/heads/head_43.png";
    import head_44 from "$lib/images/heads/head_44.png";

    export let char: Character

    const teamPokemon: TeamPokemon[][] = [[], [], []]
    char.team.forEach(teamMon => teamPokemon[teamMon.slot].push(teamMon))

    let charDetails = CHARACTER_MAP[char.character.value]
    if (!charDetails) {
        charDetails = {
            name: "Unknown",
            quote: "...",
            gender: Gender.Female
        }
    }

    const heads = {
        4: head_4,
        5: head_5,
        41: head_41,
        42: head_42,
        43: head_43,
        44: head_44,
    }
    let head = heads[charDetails.gender]
    if (!head) {
        head = head_5
    }

    const cssId = charDetails.name.toLowerCase();
    const style = `--primary: var(--${cssId}-prim, #94a3b8);
        --secondary: var(--${cssId}-seco, #e2e8f0);
        --background: var(--${cssId}-bg, var(--default-bg));
        --bg-color-1: var(--${cssId}-bg-1, hsl(215, 26%, 23%));
        --bg-color-2: var(--${cssId}-bg-2, hsl(217, 26%, 27%));`

    function parsedPokemonId(mon: TeamPokemon | Reward) {
        return "" + mon.pokemon.value + "|" + mon.form.value
    }
    const rewardPokemonIds = char.rewards.map(r => parsedPokemonId(r))

    function isRewardSlot(mons: TeamPokemon[]) {
        for (const mon of mons) {
            if (!rewardPokemonIds.includes(parsedPokemonId(mon))) {
                return false
            }
        }
        return true
    }

</script>

<div
    class="w-full max-w-xl font-lexend fit divide-slate-900 divide-y-2 bg-slate-800 box-outline text-slate-900 text-sm"
    style={style}
>

    <div class="w-full h-fit header-default flex flex-row p-3 justify-center items-center gap-3">
        <div class="box-secondary">
            <div class="uppercase box-outline text-center py-1.5">
                {charDetails.name}
            </div>
            <div class="flex text-[0.7rem] mt-0.5 gap-0.5">
                <div class="box-outline px-2 py-1">
                    12.78%
                </div>
                <div class="box-outline px-2 py-1">
                    7642
                </div>
            </div>
        </div>

        <div class="box-outline box-primary h-fit flex items-center pl-2 gap-2">
            <img
                class="w-10 h-16 object-contain"
                src={head}
                alt="Male Grunt"
            >
            <div class="italic text-xs py-1 pr-2 break-words">
                “{charDetails.quote}”
            </div>
        </div>
    </div>

    <div class="p-3 grid gap-2.5">
        {#each teamPokemon as mons, key}
            <TeamBox key={key + 1} mons={mons} primary={isRewardSlot(mons)} />
        {/each}
    </div>

</div>
