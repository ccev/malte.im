<script lang="ts">
    import GruntBox from "../components/GruntBox.svelte";
    import type {ApiResponse, DetailedCharacter} from "../@types/gruntApi";
    import {Group, CHARACTER_MAP, Gender} from "../gruntData";

    export let data: ApiResponse

    const characters: DetailedCharacter[] = []
    const counts: Map<Group, number> = new Map<Group, number>()
    data.characters.forEach(char => {
        const charDetails = CHARACTER_MAP[char.character.value]

        if (charDetails) {
            let sum = 0
            char.rewards.forEach(r => sum += r.total)

            counts.set(charDetails.group, (counts.get(charDetails.group) || 0) + sum)

            const detailedChar: DetailedCharacter = {
                character: char.character,
                rewards: char.rewards,
                team: char.team,
                details: charDetails,
                thisTotal: sum,
                groupTotal: 0
            }
            characters.push(detailedChar)
        }
    })

    characters.forEach(char => char.groupTotal = counts.get(char.details.group))
    characters.sort((a, b) => a.details.name.localeCompare(b.details.name))
    characters.sort((a, b) => a.details.group - b.details.group)
</script>

<div
    class="m-auto w-fit max-w-5xl grid gap-y-4 gap-x-3.5 place-items-center items-stretch min-[570px]:grid-cols-2 min-[830px]:grid-cols-3"
>
    {#each characters as char}
        <GruntBox char={char}/>
    {/each}
</div>
