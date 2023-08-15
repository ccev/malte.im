<script lang="ts">
    import GruntBox from "../../components/GruntBox.svelte";
    import type {ApiResponse, DetailedCharacter} from "../../@types/gruntApi";
    import {CHARACTER_MAP, Group} from "../../gruntData";
    import Motd from "../../components/Motd.svelte";
    import Menu from "../../components/menu/Menu.svelte";
    import {getGruntData} from "$lib/api";
    import Layout from "../../components/layout/Layout.svelte";

    export let data: ApiResponse

    let characters: DetailedCharacter[] = []
    let counts: Map<Group, number> = new Map<Group, number>()

    function buildCharacters(gruntData: ApiResponse) {
        characters = []
        counts.clear()

        gruntData.characters.forEach(char => {
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
    }

    buildCharacters(data)

    function updateData(hours: number) {
        getGruntData(hours, fetch)
            .then(r => buildCharacters(r))
            .catch(e => console.error(e))
    }
</script>

<Layout>
    <div
        class="mx-auto w-fit max-w-5xl grid gap-2.5 place-items-center items-stretch min-[570px]:grid-cols-2 min-[830px]:grid-cols-3 min-[830px]:gap-3.5"
    >
        {#each characters as char (char.character.value)}
            <GruntBox char={char}/>
        {/each}
    </div>

    <Menu
        slot="menu"
        on:changetimeframe={e => updateData(e.detail.hours)}
    />
</Layout>
