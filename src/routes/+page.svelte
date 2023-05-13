<script lang="ts">
    import GruntBox from "../components/GruntBox.svelte";
    import type {ApiResponse, DetailedCharacter} from "../@types/gruntApi";
    import {Group, CHARACTER_MAP, Gender} from "../gruntData";
    import Motd from "../components/Motd.svelte";
    import Hamburger from "../components/Menu.svelte";
    import { _ } from "svelte-i18n"

    export let data: ApiResponse

    const characters: DetailedCharacter[] = []
    const counts: Map<Group, number> = new Map<Group, number>()
    data.characters.forEach(char => {
        const charDetails = CHARACTER_MAP[char.character.value]

        if (charDetails) {
            let sum = 0
            char.team.forEach(t => {
                if (t.slot === 0) {
                    sum += t.total
                }
            })

            let rewardTotal = 0
            char.rewards.forEach(r => rewardTotal += r.total)

            counts.set(charDetails.group, (counts.get(charDetails.group) || 0) + sum)

            const detailedChar: DetailedCharacter = {
                character: char.character,
                rewards: char.rewards,
                team: char.team,
                details: charDetails,
                thisTotal: sum,
                rewardTotal: rewardTotal,
                groupTotal: 0
            }
            characters.push(detailedChar)
        }
    })

    function anyShiny(char: DetailedCharacter) {
        return char.rewards.some(r => r.shinies > 0) ? 0 : 1
    }

    characters.forEach(char => char.groupTotal = counts.get(char.details.group))
    characters.sort((a, b) => a.details.name.localeCompare(b.details.name))
    characters.sort((a, b) => anyShiny(a) - anyShiny(b));
    characters.sort((a, b) => a.details.group - b.details.group)
</script>

<div class="relative max-w-[69.5rem] mx-auto">
    <div class="absolute top-0">
        <Hamburger />
    </div>
    <div class="mx-auto w-fit max-w-5xl grid gap-2.5 place-items-center items-stretch min-[570px]:grid-cols-2 min-[830px]:grid-cols-3 min-[830px]:gap-3.5">
        <Motd />
        {#each characters as char}
            <GruntBox char={char}/>
        {/each}
    </div>

</div>


