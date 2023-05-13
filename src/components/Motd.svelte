<script lang="ts">
    import { onMount } from "svelte";
    import "../styles/box.css"

    const DISCORD = "https://discord.gg/akNbA6v8Ug"
    const CURRENT_MOTD = "discord1"
    const SHOW_MOTD_KEY = "hiddenMotd"
    let showMotd = false

    function hideMotd() {
        showMotd = false
        localStorage.setItem(SHOW_MOTD_KEY, CURRENT_MOTD);
    }

    onMount(() => {
        const localShowMotd = localStorage.getItem(SHOW_MOTD_KEY);
        if (localShowMotd !== CURRENT_MOTD) {
            showMotd = true
        }
    });
</script>

{#if showMotd}
    <div class="w-full bg-slate-50 box-outline rounded-sm col-span-full flex divide-x-2 divide-slate-900">
        <a
                class="block h-full w-full p-4"
                href={DISCORD}
        >
            <p class="max-w-3xl mx-auto">
                Hey! This page provides you with the latest information on Team Rocket Grunts.
                The data is automatically gathered within the last 24 hours.
                <br/>
                I'm actively working on adding more features to make this resource even better.
                If you like to follow along, feel free to join my Discord server by
                <a
                        class="text-blue-400 underline visited:text-purple-400"
                        href={DISCORD}>
                    clicking here</a>.

                <br />
                Thank you for visiting, and I hope you find this page helpful!
            </p>
        </a>

        <button
            class="flex items-center justify-center p-4 stroke-slate-900"
            on:click={hideMotd}
        >
            <svg
                class="w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                />
            </svg>
        </button>
    </div>
{/if}

<style>
    br {
        @apply mb-3;
    }
</style>