<script lang="ts">
    import NavbarDesktop from "./NavbarDesktop.svelte";
    import "./layout.css"
    import Box from "../design/Box.svelte";
    import { onNavigate } from '$app/navigation';
    import "../../styles/theme-transition.css"
    import NavbarMobile from "./NavbarMobile.svelte";
    import {onDestroy, onMount} from "svelte";
    import {toggleTheme, isDarkMode, THEME_DARK, THEME_LIGHT} from "$lib/theme";
    import ThemeSwitch from "./ThemeSwitch.svelte";
    import type {Unsubscriber} from "svelte/store";
    import {_} from "svelte-i18n";

    onNavigate((navigation) => {
        if (!document.startViewTransition) return
        if (navigation.from.route.id === navigation.to.route.id) return

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            })
        })
    })

    let unsubscribe: null | Unsubscriber = null

    onMount(() => {
        unsubscribe = isDarkMode.subscribe((value: boolean | undefined) => {
            if (value === undefined) {
                return
            }
            const theme = value ? THEME_DARK : THEME_LIGHT
            document.body.setAttribute("data-theme", theme);
            const one_year = 60 * 60 * 24 * 365;
            document.cookie = `theme=${theme}; max-age=${one_year}; path=/`;
        })

        const savedTheme = document.body.getAttribute("data-theme")
        if (savedTheme !== "default") {
            isDarkMode.set(savedTheme === THEME_DARK)
            return
        }

        isDarkMode.set(window.matchMedia("(prefers-color-scheme: dark)",).matches)
    })

    onDestroy(() => {
        if (unsubscribe != null) {
            unsubscribe()
        }
    })

    export let scrollToFooter = false
</script>

<header
    class="theme-transition z-10 h-fit text-fore fill-fore stroke-fore fixed top-0 w-full flex bg-back border-b-2 border-outline justify-center"
>
    <NavbarMobile />
    <NavbarDesktop />
</header>

<div class="flex flex-col min-h-full">
    <main
        class="flex-grow flex-shrink-0 pt-20 px-3 pb-4"
        class:h-screen-dynamic={scrollToFooter}
    >
        <slot />
    </main>

    <footer class="w-full bg-black text-slate-200 py-3 text-xs flex-shrink-0 flex-grow-0">
        <div class="max-w-5xl mx-auto flex gap-8 px-3 items-center text-center">
            <a href="/" class="flex-1 text-left">
                malte.im
            </a>
            <a href="/use">
                {$_("site.footer_use")}
            </a>
            <a href="/privacy-policy">
                {$_("site.footer_privacy_policy")}
            </a>
        </div>
    </footer>
</div>


<div class="menu flex gap-3">
    <slot name="menu"/>
</div>

<style>
    @keyframes fade-in {
        from {
            opacity: 0;
        }
    }

    @keyframes fade-out {
        to {
            opacity: 0;
        }
    }

    @keyframes slide-from-right {
        from {
            transform: translateX(200px);
        }
    }

    @keyframes slide-to-left {
        to {
            transform: translateX(-100px);
        }
    }

    @keyframes slide-from-top {
        from {
            transform: translateY(70px);
        }
    }

    @keyframes slide-to-top {
        to {
            transform: translateY(-70px);
        }
    }

    :root::view-transition-old(main) {
        animation: 50ms cubic-bezier(0.4, 0, 1, 1) both fade-out, 160ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
        mix-blend-mode: normal;
    }

    :root::view-transition-new(main) {
        animation: 90ms cubic-bezier(0.1, 0.5, 0.5, 1) both slide-from-right;
        mix-blend-mode: normal;
    }

    :root::view-transition-old(menu) {
        animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out, 300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-top;
    }

    :root::view-transition-new(menu) {
        animation: 150ms cubic-bezier(0, 0, 0.2, 1) 40ms both fade-in, 200ms cubic-bezier(0.4, 0, 0.2, 1) both
        slide-from-top;
    }

    main {
        view-transition-name: main;
    }

    .menu {
        view-transition-name: menu;
    }

    header {
        view-transition-name: header;
    }
</style>
