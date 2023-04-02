<script lang="ts">
    import "./box.css"
    import type {Enum} from "../@types/gruntApi";

    export let monId: Enum
    export let formId: Enum

    const formattedMonId = String(monId.value).padStart(3, "0")
    const formattedFormId = formId.value > 0 ? formId.value.toString() : "00"
</script>

<div class="box-outline box-primary h-14 w-14 flex flex-col items-center justify-between">
    <img
        class="h-10 w-10 object-contain translate-y-1.5"
        src="https://github.com/xxleevo/monicons/blob/master/classic/pokemon_icon_{formattedMonId}_{formattedFormId}.png?raw=true"
        alt={monId.name}
    >

    <div class="box-outline box-secondary w-full h-5 z-0 text-xs text-slate-900">
        33%
    </div>
</div>