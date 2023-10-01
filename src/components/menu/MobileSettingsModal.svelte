<script lang="ts">
    import Modal from "./Modal.svelte";
    import Box from "../design/Box.svelte";
    import XIcon from "../icons/XIcon.svelte";
    import type {popupCallback} from "./Popup.svelte";
    import SettingsModalSetting from "./SettingsModalSetting.svelte";

    let closeModal: popupCallback
    export let openModal: popupCallback
</script>

<Modal
    title="Settings"
    bind:closeModal bind:openModal
>
    <div
        class="grid max-w-[18rem] mx-auto gap-x-3 gap-y-5 px-3 py-7 items-center"
        style="grid-template-columns: 40% 60%;"
    >
        <SettingsModalSetting label="Language"/>
        <SettingsModalSetting label="Theme"/>
<!--        <div>-->
<!--            Theme-->
<!--        </div>-->
    </div>
</Modal>