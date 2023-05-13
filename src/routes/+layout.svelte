<script lang="ts">
	import "../styles/app.css";
    import '$lib/i18n'
    import {onMount} from "svelte";
    import {changeLocaleToLocal} from "$lib/i18n";

    onMount(() => {
        changeLocaleToLocal()
    })
</script>

<div class="app">
    <slot />
</div>