<script lang="ts">
    import { forwardEventsBuilder } from "$lib/internal/forwardEventsBuilder"
    import { get_current_component } from 'svelte/internal';
    import "../../styles/theme-transition.css"

    const forwardEvents = forwardEventsBuilder(get_current_component());

    let className: string = ""
    export { className as class }
    export let style: string = ""
    export let tag: string = "div"
    export let rounded: boolean = false
    export let inTheme: boolean = true
    export let props: object = {}
</script>

<svelte:element
    this={tag}
    class="outline-2 outline {className}"
    style={style}
    {...props}
    class:rounded-sm={rounded}
    class:w-fit={!className.includes(" w-")}
    class:h-fit={!className.includes(" h-")}
    class:outline-outline={inTheme}
    class:outline-slate-900={!inTheme}
    class:theme-transition={inTheme}
    use:forwardEvents
>
    <slot />
</svelte:element>
