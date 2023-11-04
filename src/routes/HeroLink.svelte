<script lang="ts">
    import Box from "../components/design/Box.svelte";
    import "../styles/theme-transition.css"

    export let title: string
    export let href: string
    export let isTargetBlank: boolean = false

    const props: Record<string, string> = {}
    if (isTargetBlank) {
        props["target"] = "_blank"
    }
</script>

<Box rounded={true} class="w-full h-full bg-[var(--color-hero-link)] overflow-hidden" inTheme={false}>
    <a
        class="w-full h-full py-2 text-slate-900 flex justify-center items-center gap-3 px-2"
        href={href}
        {...props}
    >
        <div class="flex-shrink-0">
            <slot />
        </div>
        <span>
            {title.replace("-", "\u2011")}
        </span>
    </a>
</Box>