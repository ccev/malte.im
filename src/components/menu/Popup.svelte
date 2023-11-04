<script context="module" lang="ts">
    export type popupCallback = () => void
</script>

<script lang="ts">
    import './menu.css'
    import {fade} from "svelte/transition"
    import {_} from "svelte-i18n";

    let showPopup = false

    function onPopupOpen(node: HTMLDivElement) {
        document.body.prepend(node)
    }

    export const closePopup = () => {
        showPopup = false
    }

    export const openPopup = () => {
        showPopup = true
    }

</script>

{#if showPopup}
    <div class="fixed w-full h-full z-50" use:onPopupOpen>
        <button
            on:click={closePopup}
            on:touchstart={closePopup}
            transition:fade={{duration: 180}}
            class="w-full h-full cursor-default backdrop-blur-sm backdrop-brightness-90"
            title={$_("site.close_pop_up")}
        ></button>
        <slot />
    </div>
{/if}