<script>
import Box from "../components/design/Box.svelte";
import Discord from "../components/icons/Discord.svelte";
</script>

<Box rounded={true} class="w-full h-10 bg-sky-200 overflow-hidden" inTheme={false}>
    <a
        class="back-pattern w-full h-full group/hero text-slate-900 flex justify-center items-center gap-3"
        href="https://discord.com/invite/akNbA6v8Ug"
        target="_blank"
    >
        <Discord class="w-5 fill-slate-50 stroke-[0.5rem] stroke-slate-900"/>
        <span>
            Join on Discord
        </span>

    </a>
</Box>
