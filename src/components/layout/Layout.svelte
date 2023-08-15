<script>
    import Navbar from "./Navbar.svelte";
    import "./layout.css"
    import Box from "../design/Box.svelte";
    export let scrollToFooter = false
</script>


<div
    class="nav z-10 h-fit text-fore fill-fore stroke-fore fixed top-0 w-full flex bg-back border-b-2 border-outline justify-center"
>
    <div class="w-[64rem] flex">
        <Navbar/>
    </div>
</div>

<div class="flex flex-col min-h-full">
    <main
        class="flex-grow flex-shrink-0 pt-20 px-3 pb-4"
        class:h-screen-dynamic={scrollToFooter}
    >
        <slot />
    </main>

    <footer class="w-full bg-black text-slate-200 py-1 text-xs flex-shrink-0 flex-grow-0">
        <div class="max-w-5xl mx-auto flex gap-8 px-2 items-center text-center">
            <a href="/" class="flex-1 text-left">
                malte.im
            </a>
<!--            <a href="/privacy-policy">-->
<!--                Imprint-->
<!--            </a>-->
            <a href="/use">
                Creators &amp; Developers
            </a>
            <a href="/privacy-policy">
                Privacy Policy
            </a>
        </div>
    </footer>
</div>


<div class="menu flex gap-3">
    <slot name="menu"/>
</div>
