<script lang="ts">
    import Box from "../design/Box.svelte";
    import "../menu/menu.css"
    import {LANGUAGES} from "$lib/i18n";
    import "./layout.css"
    import Raid from "../icons/pages/Raid.svelte";
    import Rocket from "../icons/pages/Rocket.svelte";
    import NavbarMobileLink from "./NavbarMobileLink.svelte";
    import Settings from "../icons/Settings.svelte";
    import Discord from "../icons/Discord.svelte";
    import Modal from "../menu/Modal.svelte";
    import type {popupCallback} from "../menu/Popup.svelte";
    import MobileSettingsModal from "../menu/MobileSettingsModal.svelte";
    import {_} from "svelte-i18n";

    const languageOptions = Object.keys(LANGUAGES).map(langKey => ({"label": LANGUAGES[langKey], "value": langKey}))

    let openModal: popupCallback
</script>

<MobileSettingsModal bind:openModal></MobileSettingsModal>

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

        <NavbarMobileLink href="/raids" label={$_("site.title_raid_bosses")}>
            <Raid slot="icon" class="h-6"/>
        </NavbarMobileLink>
        <NavbarMobileLink href="/rocket" label={$_("site.title_rocket_lineups")}>
            <Rocket slot="icon" class="h-5"/>
        </NavbarMobileLink>
        <Box tag="li" class="flex-shrink h-full w-16">
            <button
                on:click={openModal}
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
