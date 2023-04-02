<script lang="ts">
    import GruntBox from "../components/GruntBox.svelte";
    import type {ApiResponse} from "../@types/gruntApi";

    export let data: ApiResponse
</script>

<div class="m-auto max-w-7xl grid gap-3 place-items-start min-[570px]:grid-cols-2 min-[860px]:grid-cols-3">
    {#each data.characters as char}
        <GruntBox char={char}/>
    {/each}
</div>
