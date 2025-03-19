<script>
    import Layout from "../components/layout/Layout.svelte";
    import "./heroShortcut.css"
    import HeroRaids from "./HeroRaids.svelte";
    import HeroRocket from "./HeroRocket.svelte";
    import HeroLink from "./HeroLink.svelte";
    import Discord from "../components/icons/Discord.svelte";
    import {_} from "svelte-i18n";
    import KofiIcon from "../components/icons/KofiIcon.svelte";
    import Box from "../components/design/Box.svelte";
</script>

<Layout scrollToFooter={true}>
    <div class="max-w-5xl mx-auto grid gap-4">
        <Box
            class="w-full bg-back text-fore text-base p-4"
            rounded
        >
            <p class="mb-4">
                Hi!
            </p>
            <p class="mb-4">
                Unfortunately, I've lost interest in the game and stopped maintaining malte.im.
                This site will be kept up for archival purposes.
                <b class="font-semibold">All data is outdated and not accurate!</b>
            </p>
            <p>
                Luckily, a friend is currently working on a replacement.
                <a class="text-sky-500 underline visited:text-purple-600" href="https://discord.gg/akNbA6v8Ug">
                    Join the malte.im Discord
                </a>
                to know when it's finished and where to find it!
            </p>
        </Box>

        <HeroRocket/>
        <HeroRaids/>

        <div class="flex gap-3">
            <HeroLink
                title={$_("site.hero_discord")}
                href="https://discord.com/invite/akNbA6v8Ug"
                isTargetBlank={true}
            >
                <Discord class="w-5 fill-slate-50"/>
            </HeroLink>
            <HeroLink
                title={$_("site.hero_kofi")}
                href="https://ko-fi.com/ma1te"
            >
                <KofiIcon class="w-6"/>
            </HeroLink>
        </div>
    </div>
</Layout>
