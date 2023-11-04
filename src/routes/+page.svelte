<script>
    import Layout from "../components/layout/Layout.svelte";
    import "./heroShortcut.css"
    import HeroRaids from "./HeroRaids.svelte";
    import HeroRocket from "./HeroRocket.svelte";
    import HeroLink from "./HeroLink.svelte";
    import Discord from "../components/icons/Discord.svelte";
    import {_} from "svelte-i18n";
    import KofiIcon from "../components/icons/KofiIcon.svelte";
</script>

<Layout scrollToFooter={true}>
    <div class="max-w-5xl mx-auto grid gap-4">
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
