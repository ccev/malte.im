<script lang="ts">
    import './menu.css'
    import Box from "../design/Box.svelte";
    import {onMount} from "svelte";
    import {scale, fade} from "svelte/transition"

    let showModal = false

    function onModalOpen(node: HTMLDivElement) {
        document.body.prepend(node)
    }

    function closeModal() {
        showModal = false
    }

    export function openModal() {
        showModal = true
    }

</script>

{#if showModal}
    <div class="fixed w-full h-full z-50" use:onModalOpen >
        <button
            on:click={closeModal}
            on:touchstart={closeModal}
            transition:fade={{duration: 180}}
            class="w-full h-full cursor-default backdrop-blur-sm backdrop-brightness-90"
            title="Close Modal"
        ></button>

        <div
            transition:scale={{duration: 140}}
            class="w-32 h-32 absolute left-0 right-0 top-0 bottom-0 m-auto"
        >
            <Box
                class="bg-back w-full h-full"

            >
                Hi!
            </Box>
        </div>

    </div>
{/if}