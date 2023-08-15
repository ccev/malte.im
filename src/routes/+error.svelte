<script lang="ts">
    import "../styles/app.css"
    import {page} from '$app/stores'
    import Box from "../components/design/Box.svelte"
    import "../components/menu/menu.css"
    import Layout from "../components/layout/Layout.svelte";
</script>

<Layout>
    <div
        class="flex flex-col items-center justify-center gap-3 w-full"
    >
        <Box class="bg-back text-fore px-24 py-4">
            Error {$page.status}: {$page.error.message}
        </Box>
    </div>
</Layout>




