<script lang="ts">
    import Box from "../design/Box.svelte";
    import Select from "../menu/Select.svelte";
    import "../menu/menu.css"
    import {locale} from "svelte-i18n";
    import {changeLocalLocale, LANGUAGES} from "$lib/i18n";
    import ThemeSwitch from "./ThemeSwitch.svelte";
    import "./layout.css"
    import Link from "./NavbarLink.svelte";
    import Raid from "../icons/pages/Raid.svelte";
    import Rocket from "../icons/pages/Rocket.svelte";
    import Discord from "../icons/Discord.svelte";

    const languageOptions = Object.keys(LANGUAGES).map(langKey => ({"label": LANGUAGES[langKey], "value": langKey}))

    // let nav: HTMLElement
    // let showBackdrop = false
    // const BODY_CLASS = "overflow-hidden"
    //
    // function showNav() {
    //     showBackdrop = true
    //     document.body.classList.add(BODY_CLASS)
    //     nav.classList.add("flex")
    //     nav.classList.remove("hidden")
    // }
    //
    // function hideNav() {
    //     showBackdrop = false
    //     document.body.classList.remove(BODY_CLASS)
    //     nav.classList.remove("flex")
    //     nav.classList.add("hidden")
    // }
</script>

<!--{#if showBackdrop}-->
<!--    <button-->
<!--        on:click={hideNav}-->
<!--        on:touchstart={hideNav}-->
<!--        class="fixed z-10 w-full h-full left-0 top-0 cursor-default backdrop-blur-[1px] backdrop-brightness-90"-->
<!--    ></button>-->
<!--{/if}-->

<div class="navbar-desktop w-[64rem] stroke-0">
    <nav
        class="h-16 whitespace-nowrap w-full"
    >
        <ul class="h-full w-full flex list-none">
            <Link href="/" label="malte.im"/>
            <Link href="/raids" label="Raid Bosses">
                <Raid slot="icon" class="h-5"/>
            </Link>
            <Link href="/rocket" label="Rocket Lineups">
                <Rocket slot="icon" class="h-4"/>
            </Link>
            <!--        <Link href="/quests" label="Quest Rewards" hideCallback={hideNav}/>-->
        </ul>
    </nav>

    <div class="gap-0.5 h-16 mr-3 flex">
        <Box>
            <a
                class="flex fill-fore h-full w-full items-center justify-center aspect-square nav-button"
                href="https://discord.gg/akNbA6v8Ug"
                title="Discord Server"
            >
                <Discord class="w-6"/>
            </a>
        </Box>
        <ThemeSwitch/>
        <Select
            options={languageOptions}
            defaultOption={$locale?.toUpperCase()}
            title="Change Language"
            on:select={(event) => changeLocalLocale(event.detail.value)}
        >
            <Box
                slot="button"
                let:openDropdown
                on:click={openDropdown}
                let:defaultOption
            >
                <button class="nav-button aspect-square">
                    {defaultOption}
                </button>
            </Box>
        </Select>
        <!--    TODO: Translate button titles -->
    </div>
</div>