<script>
    import Box from "../components/design/Box.svelte";
    import KofiIcon from "../components/icons/KofiIcon.svelte";
    import "../styles/theme-transition.css"
</script>

<Box rounded={true} class="w-full h-10 bg-[var(--color-hero-link)] overflow-hidden" inTheme={false}>
    <a
        class="back-pattern w-full h-full group/hero text-slate-900 flex justify-center items-center gap-3"
        href="https://ko-fi.com/ma1te"
    >
        <KofiIcon class="w-6"/>
        <span>Donate on Ko-Fi</span>

    </a>
</Box>