<script lang="ts">
    import Box from "../components/design/Box.svelte";
    import GruntBox from "../components/GruntBox.svelte";

    export let title: string
    export let subtitle: string
    export let link: string
</script>

<Box rounded={true} class="w-full h-44 bg-slate-700 overflow-hidden" inTheme={false}>
    <a
        class="back-pattern w-full h-full group/hero"
        href={link}
    >

        <div class="section-right h-full relative">
            <slot />
            <div class="absolute w-full h-full"></div>  <!--Disable any hover effects-->
        </div>

        <div class="section-left h-full flex justify-center items-center relative px-2">
<!--            <div class="back-dotted"></div>-->
            <div class="hero-header break-normal text-center bg-[var(--color-hero-header)]">
                <Box class="text-lg py-4 px-2 w-full" inTheme={false}>
                <span class="title">
                    {title}
                </span>
                </Box>
                <Box class="py-2 w-full px-2 mt-0.5" inTheme={false}>
                    {subtitle}
                </Box>
            </div>
        </div>
    </a>
</Box>

<style>
    .hero-header {
        width: clamp(14rem, 90%, 20rem);
        text-wrap: balance;
    }

    .section-right {
        @apply w-full;
        grid-area: 1/1;
    }

    .section-left {
        @apply w-full;
        grid-area: 1/1;
    }

    .back-pattern {
        display: grid;
        background: repeating-linear-gradient(
                45deg,
                var(--color-hero-bg-1),         var(--color-hero-bg-1) 60px,
                var(--color-hero-bg-2) 60px,    var(--color-hero-bg-2) 80px );
    }

    @media (min-width: 670px) {
        .back-pattern {
            display: flex;
            flex-direction: row-reverse;
        }

        .section-left {
            width: 53%;
            flex-shrink: 0;
        }
    }
</style>