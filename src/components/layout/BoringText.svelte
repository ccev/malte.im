<script>
    import Box from "../design/Box.svelte";
</script>

<Box class="boring-text bg-back text-fore w-full max-w-2xl mx-auto p-4 text-base">
    <slot />
</Box>

<style>
    :global(.boring-text h1) {
        @apply text-3xl mb-2;
    }

    :global(.boring-text h2) {
        @apply text-2xl mb-1 mt-6;
    }

    :global(.boring-text a) {
        @apply text-blue-400 underline underline-offset-auto;
    }

    :global(.boring-text a:visited) {
        @apply text-purple-400;
    }

    :global(.boring-text code) {
        @apply bg-slate-300 text-slate-700 px-1 py-0.5 rounded;
    }

    :global(.boring-text ul) {
        @apply list-disc ml-4;
    }

    :global(.boring-text li) {
        @apply mt-2;
    }

    :global(.boring-text .monolith) {
        @apply tracking-wider;
    }

    :global(.boring-text .monolith::before) {
        content: "‹";
    }

    :global(.boring-text .monolith::after) {
        content: "›";
    }
</style>