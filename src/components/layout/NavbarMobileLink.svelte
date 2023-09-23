<script lang="ts">
    import Box from "../design/Box.svelte";

    export let href: string
    export let label: string
</script>

<Box tag="li" class="h-full w-16">
    <a
        class="nav-button flex fill-fore h-full w-full items-center justify-center"
        href={href}
        title={label}
    >
        <slot name="icon"/>
    </a>
</Box>