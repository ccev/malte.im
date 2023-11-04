<script context="module" lang="ts">
    export enum AnchorX {
        Left = 1,
        Right = 2
    }

    export enum AnchorY {
        Top = 1,
        Bottom = 2
    }
</script>

<script lang="ts">
    import './menu.css'
    import Box from "../design/Box.svelte";
    import {createEventDispatcher} from 'svelte';
    import {slide} from 'svelte/transition';
    import type {popupCallback} from "./Popup.svelte";
    import Popup from "./Popup.svelte";

    export let options: Option[] = []
    export let defaultOption: string = ""
    export let title: string = ""
    export let anchorX: AnchorX = AnchorX.Right
    export let anchorY: AnchorY = AnchorY.Top

    const dispatch = createEventDispatcher();
    let selectButton: HTMLDivElement

    function setMaxHeight(div: HTMLDivElement) {
        const buttonBounds = selectButton.getBoundingClientRect()
        const py = 20
        const px = 10

        if (anchorX === AnchorX.Left) {
            div.style.left = buttonBounds.left + "px"
        }
        else if (anchorX === AnchorX.Right) {
            div.style.right = window.innerWidth - buttonBounds.right + "px"
        }
        if (anchorY === AnchorY.Top) {
            div.style.top = buttonBounds.bottom + "px"
        }
        else if (anchorY === AnchorY.Bottom) {
            div.style.bottom = window.innerHeight - buttonBounds.top + "px"
        }
        const bounds = div.getBoundingClientRect()

        let maxHeight = window.innerHeight - bounds.top - (py * 2)
        if (bounds.bottom > window.innerHeight) {
            console.log("bottom")
            div.style.top = py + "px"

            maxHeight += bounds.top
            div.style.maxHeight = maxHeight + "px"
        }
        if (bounds.top < 0) {
            console.log("top")
            div.style.bottom = py + "px"

            maxHeight += bounds.bottom
            div.style.maxHeight = maxHeight + "px"
        }
        if (bounds.left < 0) {
            console.log("left")
            div.style.transform = `translateX(${(bounds.left * -1) + px}px)`
        }
        if (bounds.right > window.innerWidth) {
            console.log("right")
            div.style.transform = `translateX(${(window.innerWidth - bounds.right) + px}px)`
        }
    }

    interface Option {
        label: string;
        value: any;
    }

    let openDropdown: popupCallback
    let closeDropdown: popupCallback

    function selectOption(value: string) {
        closeDropdown()
        dispatch("select", {value});
    }
</script>

<div class="relative w-fit">
    <div
        class="w-fit h-fit"
        bind:this={selectButton}
    >
        <slot
            name="button" {openDropdown} {defaultOption}
        >
            <Box
                tag="button"
                class="button bg-slate-50 h-full text-fore"
                on:click={openDropdown}
                props={{title: title}}
            >
                {defaultOption}
            </Box>
        </slot>
    </div>

    <Popup
        bind:openPopup={openDropdown}
        bind:closePopup={closeDropdown}
    >
        <div
            class="fixed z-30 overflow-y-auto py-2 button-shadow outline-2 outline outline-outline text-center bg-back text-fore flex flex-col"
            transition:slide={{duration: 80}}
            use:setMaxHeight
        >
            {#each options as option}
                <button
                    on:click={() => selectOption(option.value)}
                    class="w-full whitespace-nowrap px-12 py-2.5 hover:bg-fore hover:text-back"
                    title={option.label}
                >
                    {option.label}
                </button>
            {/each}
        </div>
    </Popup>
</div>

