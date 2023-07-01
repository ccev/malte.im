<script lang="ts">
    import './menu.css'
    import Box from "../design/Box.svelte";
    import {createEventDispatcher} from 'svelte';
    import {slide} from 'svelte/transition';

    export let options: Option[] = []
    export let defaultOption: string = ""
    export let title: string = ""

    const dispatch = createEventDispatcher();
    const BODY_CLASS = "overflow-hidden"
    let showDropdown = false

    function setMaxHeight(div: HTMLDivElement) {
        const bounds = div.getBoundingClientRect()
        const py = 20
        const px = 10

        let maxHeight = window.innerHeight - bounds.top - (py * 2)
        if (bounds.bottom > window.innerHeight) {
            div.style.top = py + "px"

            maxHeight += bounds.top
            div.style.maxHeight = maxHeight + "px"
        }
        if (bounds.top < 0) {
            div.style.bottom = py + "px"

            maxHeight += bounds.bottom
            div.style.maxHeight = maxHeight + "px"
        }
        if (bounds.left < 0) {
            div.style.transform = `translateX(${(bounds.left * -1) + px}px)`
        }
        if (bounds.right > window.innerWidth) {
            div.style.transform = `translateX(${(window.innerWidth - bounds.right) + px}px)`
        }
    }

    interface Option {
        label: string;
        value: any;
    }

    function closeDropdown() {
        showDropdown = false
        document.body.classList.remove(BODY_CLASS)
    }

    function openDropdown() {
        showDropdown = true
        document.body.classList.add(BODY_CLASS)
    }

    function selectOption(value: string) {
        closeDropdown()
        dispatch("select", {value});
    }
</script>

<div class="relative w-fit">
    <slot
        name="button" {openDropdown} {defaultOption}
    >
        <Box
            tag="button"
            class="button bg-slate-50 h-full"
            on:click={openDropdown}
        >
            {defaultOption}
        </Box>
    </slot>

    {#if showDropdown}
        <button
            on:click={closeDropdown}
            on:touchstart={closeDropdown}
            class="fixed z-10 w-full h-full left-0 top-0 cursor-default backdrop-blur-[1px] backdrop-brightness-90"
        ></button>
        <div
            class="absolute z-20 overflow-y-scroll py-2 button-shadow outline-2 outline outline-outline text-center bg-back text-fore flex flex-col"
            style="bottom: var(--select-modal-bottom, auto); top: var(--select-modal-top, 0); left: var(--select-modal-left, 0); right: var(--select-modal-right, auto);"
            use:setMaxHeight
            in:slide={{duration: 60}}
        >
            {#each options as option}
                <button
                    on:click={() => selectOption(option.value)}
                    class="w-full whitespace-nowrap px-12 py-2.5 hover:bg-fore hover:text-back"
                >
                    {option.label}
                </button>
            {/each}
        </div>
    {/if}
</div>
