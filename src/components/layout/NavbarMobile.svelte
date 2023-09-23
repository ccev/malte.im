<script lang="ts">
    import Box from "../design/Box.svelte";
    import Select from "../menu/Select.svelte";
    import "../menu/menu.css"
    import {locale} from "svelte-i18n";
    import {changeLocalLocale, LANGUAGES} from "$lib/i18n";
    import ThemeSwitch from "./ThemeSwitch.svelte";
    import "./layout.css"
    import NavbarLink from "./NavbarLink.svelte";
    import Raid from "../icons/pages/Raid.svelte";
    import Rocket from "../icons/pages/Rocket.svelte";
    import NavbarMobileLink from "./NavbarMobileLink.svelte";
    import Link from "./NavbarLink.svelte";
    import Settings from "../icons/Settings.svelte";
    import Discord from "../icons/Discord.svelte";
    import Modal from "../menu/Modal.svelte";

    const languageOptions = Object.keys(LANGUAGES).map(langKey => ({"label": LANGUAGES[langKey], "value": langKey}))

    let modal: Modal
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

<Modal bind:this={modal}></Modal>

<nav class="navbar-mobile w-full h-16 whitespace-nowrap stroke-0">
    <ul class="h-full w-full flex gap-0.5 list-none mr-3">
        <li class="px-2 nav-button h-full flex-shrink flex-grow">
            <a
                class="w-full h-full flex justify-center items-center"
                href="/"
            >
                <span>
                    malte.im
                </span>
            </a>
        </li>

        <NavbarMobileLink href="/raids" label="Raid Bosses">
            <Raid slot="icon" class="h-6"/>
        </NavbarMobileLink>
        <NavbarMobileLink href="/rocket" label="Rocket Lineups">
            <Rocket slot="icon" class="h-5"/>
        </NavbarMobileLink>
        <NavbarMobileLink href="https://discord.gg/akNbA6v8Ug" label="Discord Server">
            <Discord slot="icon" class="h-4"/>
        </NavbarMobileLink>
        <Box tag="li" class="flex-shrink h-full w-16">
            <button
                on:click={modal.openModal}
                class="nav-button flex fill-fore h-full w-full items-center justify-center"
            >
                <Settings class="h-6"/>
            </button>
        </Box>
    </ul>
</nav>

<style>
    nav {
        font-size: clamp(0.8rem, -0.875rem + 8.333vw, 1.25rem);

    }

</style>
