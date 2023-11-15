<script lang="ts">
    import Popup from "./Popup.svelte"
    import type {popupCallback} from "./Popup.svelte";
    import Box from "../design/Box.svelte"
    import {scale, slide, fly} from "svelte/transition"
    import XIcon from "../icons/XIcon.svelte";
    import {_} from "svelte-i18n";

    export let openModal: popupCallback = () => {}
    export let closeModal: popupCallback = () => {}

    export let title: string
</script>

<Popup bind:openPopup={openModal} bind:closePopup={closeModal}>
    <div
        transition:scale={{duration: 140}}
        class="w-full max-w-lg px-3 h-fit absolute left-0 right-0 top-0 bottom-0 m-auto text-fore fill-fore stroke-fore text-lg"
        role="dialog"
    >
        <Box
            class="bg-back w-full h-fit overflow-hidden"
            rounded
        >
            <Box class="w-full flex items-center h-12">
                <span class="basis-full pl-3">
                    {$_(title)}
                </span>
                <Box tag="button" on:click={closeModal} class="aspect-square h-full flex justify-center items-center">
                    <XIcon class="w-3"/>
                </Box>
            </Box>
            <slot />
        </Box>
    </div>
</Popup>