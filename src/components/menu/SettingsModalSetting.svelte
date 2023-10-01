<script lang="ts">
    import Box from "../design/Box.svelte";

    export let label: string

</script>


<span class="w-full">
    {label}
</span>
<Box tag="select" class="w-full truncate py-3 text-center bg-back">
    <option>Dark</option>
    <option>Light</option>
    <option>System</option>
</Box>
