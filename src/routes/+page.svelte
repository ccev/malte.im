<script>
    import Layout from "../components/layout/Layout.svelte";
    import "./heroShortcut.css"
    import HeroDiscord from "./HeroDiscord.svelte";
    import HeroKofi from "./HeroKofi.svelte";
    import HeroRaids from "./HeroRaids.svelte";
    import HeroRocket from "./HeroRocket.svelte";
</script>

<Layout scrollToFooter={true}>
    <div class="max-w-5xl mx-auto grid gap-4">
        <HeroRocket/>
        <HeroRaids/>

        <div class="flex gap-3">
            <HeroDiscord/>
            <HeroKofi/>
        </div>
    </div>
</Layout>
