<script lang="ts">
    import Box from "../design/Box.svelte";
    import Select from "../menu/Select.svelte";
    import "../menu/menu.css"
    import {_, locale} from "svelte-i18n";
    import {changeLocalLocale, languageOptions} from "$lib/i18n";
    import ThemeSwitch from "./ThemeSwitch.svelte";
    import "./layout.css"
    import Link from "./NavbarLink.svelte";
    import Raid from "../icons/pages/Raid.svelte";
    import Rocket from "../icons/pages/Rocket.svelte";
</script>

<div class="navbar-desktop w-[64rem] stroke-0">
    <nav
        class="h-16 whitespace-nowrap w-full"
    >
        <ul class="h-full w-full flex list-none">
            <Link href="/" label="malte.im"/>
            <Link href="/raids" label={$_("site.title_raid_bosses")}>
                <Raid slot="icon" class="h-5"/>
            </Link>
            <Link href="/rocket" label={$_("site.title_rocket_lineups")}>
                <Rocket slot="icon" class="h-4"/>
            </Link>
            <!--        <Link href="/quests" label="Quest Rewards" hideCallback={hideNav}/>-->
        </ul>
    </nav>

    <div class="gap-0.5 h-16 mr-3 flex">
        <ThemeSwitch />
        <Select
            options={languageOptions}
            defaultOption={$locale?.toUpperCase()}
            title={$_("site.input_change_language")}
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
    </div>
</div>