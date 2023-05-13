<script lang="ts">
    import '../../styles/box.css'
    import '../../styles/menu.css'
    import { createEventDispatcher } from 'svelte';
    import { scale } from 'svelte/transition';

    export let options: Option[] = []
    export let defaultOption: string = ""

    const dispatch = createEventDispatcher();
    let showDropdown = false

    interface Option {
        label: string;
        value: string;
    }

    function closeDropdown() {
        showDropdown = false
    }

    function openDropdown() {
        showDropdown = true
    }

    function selectOption(value: string) {
        closeDropdown()
        dispatch("select", { value });
    }
</script>

<div class="flex flex-col">
    <button
            on:click={openDropdown}
            class="box-outline button"
    >
        {defaultOption}
    </button>
    {#if showDropdown}
        <button
            on:click={closeDropdown}
            on:scroll={closeDropdown}
            class="fixed w-full h-full left-0 top-0"
        ></button>
        <div
            in:scale={{duration: 60}}
            out:scale={{duration: 120}}
            class="fixed h-fit max-h-[90vh] overflow-auto py-1 w-fit button-shadow box-outline bg-slate-50 bottom-2 right-3 flex flex-col-reverse min-[1145px]:flex-col min-[1145px]:right-auto min-[1145px]:top-3"
        >
            {#each options as option}
                <button
                    on:click={() => selectOption(option.value)}
                    class="w-full whitespace-nowrap px-7 py-2.5 hover:bg-slate-900 hover:text-slate-50"
                >
                    {option.label}
                </button>
            {/each}
        </div>
    {/if}
</div>
