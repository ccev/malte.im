<script>
    import Navbar from "./Navbar.svelte";
    import "./layout.css"
</script>

<div class="flex flex-col w-full min-[1050px]:p-3 min-[1050px]:flex-row">
    <div class="min-[1050px]:basis-1/4 text-fore fill-fore stroke-fore">
        <div class="nav z-10">
            <Navbar/>
        </div>
    </div>

    <main class="flex-grow flex-shrink-0 px-3">
        <slot name="content"/>
    </main>

    <div class="basis-1/4 flex-shrink text-fore fill-fore stroke-fore">
        <div class="menu flex gap-3">
            <slot name="menu"/>
        </div>
    </div>
</div>
