<script lang="ts">
    import "./layout.css"
    import type {MouseEventHandler} from "svelte/elements";
    export let href: string
    export let label: string
    export let hideCallback: MouseEventHandler<HTMLAnchorElement> | null = null
    export let isHome: boolean = false
</script>

<a
    class="link flex items-center hover:bg-fore hover:text-back"
    href={href}
    class:home-link={isHome}
    on:click={hideCallback}
>
    <span>
        {label}
    </span>
</a>