<script lang="ts">
    import Box from "../design/Box.svelte";
    import Select from "../menu/Select.svelte";
    import "../menu/menu.css"
    import {locale} from "svelte-i18n";
    import {changeLocalLocale, LANGUAGES} from "$lib/i18n";
    import ThemeSwitch from "./ThemeSwitch.svelte";
    import "./layout.css"
    import Link from "./Link.svelte";

    const languageOptions = Object.keys(LANGUAGES).map(langKey => ({"label": LANGUAGES[langKey], "value": langKey}))

    let nav: HTMLElement
    let showBackdrop = false
    const BODY_CLASS = "overflow-hidden"

    function showNav() {
        showBackdrop = true
        document.body.classList.add(BODY_CLASS)
        nav.classList.add("flex")
        nav.classList.remove("hidden")
    }

    function hideNav() {
        showBackdrop = false
        document.body.classList.remove(BODY_CLASS)
        nav.classList.remove("flex")
        nav.classList.add("hidden")
    }
</script>

{#if showBackdrop}
    <button
        on:click={hideNav}
        on:touchstart={hideNav}
        class="fixed z-10 w-full h-full left-0 top-0 cursor-default backdrop-blur-[1px] backdrop-brightness-90"
    ></button>
{/if}

<nav
    class="all-links flex w-full whitespace-nowrap"
>
    <Link href="/" label="malte.im" isHome={true}/>
    <div
        class="links hidden"
        bind:this={nav}
    >
        <Link href="/raids" label="Raid Bosses" hideCallback={hideNav}/>
        <Link href="/rocket" label="Rocket Lineups" hideCallback={hideNav}/>
<!--        <Link href="/quests" label="Quest Rewards" hideCallback={hideNav}/>-->
    </div>
</nav>

<div class="gap-0 h-16 mr-3 flex">
    <Box
        class="nav-button"
    >
        <a
            class="flex h-full w-full items-center justify-center"
            href="https://discord.gg/akNbA6v8Ug"
            title="Discord Server"
        >
            <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36"><path class="cls-1" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>
        </a>
    </Box>
    <ThemeSwitch />
    <Select
        options={languageOptions}
        defaultOption={$locale?.toUpperCase()}
        title="Change Language"
        on:select={(event) => changeLocalLocale(event.detail.value)}
    >
        <Box
            slot="button"
            tag="button"
            class="nav-button"
            let:openDropdown
            on:click={openDropdown}
            let:defaultOption
        >
            {defaultOption}
        </Box>
    </Select>
<!--    TODO: Translate button titles -->
    <Box
        on:click={showNav}
        tag="button"
        class="nav-button show-nav flex items-center justify-center"
        props={{title: "Toggle Navigation Dropdown"}}
    >
        <svg class="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
    </Box>
</div>
