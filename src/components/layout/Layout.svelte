<script>
    import Navbar from "./Navbar.svelte";
    import "./layout.css"
</script>

<div
    class="z-10 h-fit text-fore fill-fore stroke-fore sticky top-0 w-full flex  bg-back border-b-2 border-outline justify-center"
    style="--select-modal-bottom: auto; --select-modal-top: 4rem; --select-modal-right: 0; --select-modal-left: auto;"
>
    <div class="w-[64rem] flex place-content-start">
        <Navbar/>
    </div>
</div>

<main class="flex-grow flex-shrink-0 p-3">
    <slot name="content"/>
</main>

<div class="menu flex gap-3">
    <slot name="menu"/>
</div>
