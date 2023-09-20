<script lang="ts">
    import Layout from "../../components/layout/Layout.svelte";
    import RaidBox from "./RaidBox.svelte";
    import type {CurrentRaids, Raid} from "../../@types/raidApi";
    import type {Enum} from "../../@types/api";
    import "./raid.css"

    export let data: CurrentRaids

    export interface GroupedRaids {
        level: Enum;
        raids: Raid[];
    }

    function sumTotal(raids: Raid[]): number {
        return raids.reduce((sum, raid) => sum + raid.total, 0);
    }

    const totalRaids = sumTotal(data.raids)

    function groupByLevel(raids: Raid[]): GroupedRaids[] {
        const groupedObject: { [key: number]: Raid[] } = raids.reduce((acc, raid) => {
            const levelKey = raid.level.value;
            if (!acc[levelKey]) {
                acc[levelKey] = [];
            }
            acc[levelKey].push(raid);
            return acc;
        }, {});

        return Object.entries(groupedObject).map(([level, raids]) => ({
            level: raids[0].level, // since all raids in this group have the same level
            raids: raids
        }));
    }

    const groupedRaids = groupByLevel(data.raids)
</script>

<Layout>
    <div
        class="mx-auto max-w-5xl grid gap-3 place-items-center items-stretch"
    >
        {#each groupedRaids as groupedRaid, key}
            <RaidBox level={groupedRaid.level} raids={groupedRaid.raids}
                     percentage={sumTotal(groupedRaid.raids) / totalRaids}/>
        {/each}
    </div>

    <!--    <Menu-->
    <!--        slot="menu"-->
    <!--    />-->
</Layout>
