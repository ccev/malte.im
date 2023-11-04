<script>
    import Box from "../components/design/Box.svelte";
    import Discord from "../components/icons/Discord.svelte";
    import {_} from "svelte-i18n";
</script>

<Box rounded={true} class="w-full h-10 bg-[var(--color-hero-link)] overflow-hidden" inTheme={false}>
    <a
        class="back-pattern w-full h-full group/hero text-slate-900 flex justify-center items-center gap-3"
        href="https://discord.com/invite/akNbA6v8Ug"
        target="_blank"
    >
        <Discord class="w-5 fill-slate-50"/>
        <span>
            {$_("site.hero_discord")}
        </span>

    </a>
</Box>
