<script lang="ts">
    import Box from "../../components/design/Box.svelte";
    import type {Raid} from "../../@types/raidApi";

    export let playerCount: number
    export let raid: Raid

    let difficulty = 0
    if (raid.stats?.raid_difficulty) {
        for (const [i, difficultyCount] of raid.stats?.raid_difficulty.entries()) {
            if (playerCount >= difficultyCount) {
                difficulty = i + 1
            }
        }
    }

    let color = "#cbd5e1" // slate-300
    if (difficulty == 1) {
        color = "#f43f5e"  // slate-500
    } else if (difficulty == 2) {
        color = "#fbbf24"  // amber-400
    } else if (difficulty == 3) {
        color = "#4ade80"  // green-400
    } else if (difficulty == 4) {
        color = "#38bdf8"  // sky-400
    }
</script>
<Box
    class="flex-none aspect-square h-full flex items-center justify-center"
    style="background: {color};"
>
    <span>{playerCount}</span>
</Box>