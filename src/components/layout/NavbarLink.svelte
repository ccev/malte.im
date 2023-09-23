<script lang="ts">
    export let href: string
    export let label: string
</script>

<li class="h-full flex-shrink">
    <a
        class="px-5 w-full h-full justify-center flex gap-1.5 items-center hover:bg-fore hover:text-back fill-fore hover:fill-back"
        href={href}
    >
        <slot name="icon"/>
        <span class="w-fit">
            {label}
        </span>
    </a>
</li>