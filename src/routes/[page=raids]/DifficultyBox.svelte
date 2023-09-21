<script lang="ts">
    import Box from "../../components/design/Box.svelte";
    import type {Raid} from "../../@types/raidApi";

    export let playerCount: number | string
    export let raid: Raid | null
    export let difficultyOverride: number | null = null

    let difficulty = 0
    if (raid != null && typeof playerCount === "number") {
        if (raid.stats?.raid_difficulty) {
            for (const [i, difficultyCount] of raid.stats?.raid_difficulty.entries()) {
                if (playerCount >= difficultyCount) {
                    difficulty = i + 1
                }
            }
        }
    } else if (difficultyOverride != null) {
        difficulty = difficultyOverride
    }

    let color = "#cbd5e1" // slate-300
    let colorDarker = "#94a3b8" // slate-400
    let percentage = 75
    if (difficulty == 1) {
        color = "#f43f5e"  // rose-500
        colorDarker = "#be123c"  // rose-700
        percentage = 55
    } else if (difficulty == 2) {
        color = "#fbbf24"  // amber-400
        colorDarker = "#d97706"  // amber-600
        percentage = 35
    } else if (difficulty == 3) {
        color = "#4ade80"  // green-400
        colorDarker = "#16a34a"  // green-600
        percentage = 15
    } else if (difficulty == 4) {
        color = "#7dd3fc"  // sky-300
        percentage = 0
    }
    const background = `
        linear-gradient(
            0deg,
            ${colorDarker}, ${colorDarker} ${percentage}%,
            ${color} ${percentage}%, ${color} 100%);
        `
</script>
<Box
    class="flex-none aspect-square h-full flex items-center justify-center"
    style="background: {background};"
>
    <span>{playerCount}</span>
</Box>