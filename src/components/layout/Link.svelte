<script lang="ts">
    import "./layout.css"
    export let href: string
    export let label: string
</script>

<a
    class="link flex items-center hover:bg-fore hover:text-back"
    href={href}
>
    <span>
        {label}
    </span>
</a>