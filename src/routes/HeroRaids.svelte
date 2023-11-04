<script lang="ts">
    import HeroShortcut from "./HeroShortcut.svelte";
    import RaidBox from "./[page=raids]/RaidBox.svelte";
    import "./heroShortcut.css"
    import {_} from "svelte-i18n";

    const raid5 = [
        {
            level: {value: 5, name: 'RAID_LEVEL_5'},
            pokemon: {value: 243, name: 'RAIKOU'},
            form: {value: 1331, name: 'RAIKOU_NORMAL'},
            costume: {value: 0, name: 'UNSET'},
            temp_evolution: {value: 0, name: 'TEMP_EVOLUTION_UNSET'},
            total: 2476,
            encountered: 0,
            shinies: 0,
            stats: {
                cp_20: 1972,
                cp_25: 2466,
                weather_boost: [Array],
                pokebattler_name: 'RAIKOU',
                raid_difficulty: [Array]
            }
        },
        {
            level: {value: 5, name: 'RAID_LEVEL_5'},
            pokemon: {value: 244, name: 'ENTEI'},
            form: {value: 1334, name: 'ENTEI_NORMAL'},
            costume: {value: 0, name: 'UNSET'},
            temp_evolution: {value: 0, name: 'TEMP_EVOLUTION_UNSET'},
            total: 2460,
            encountered: 0,
            shinies: 0,
            stats: {
                cp_20: 1984,
                cp_25: 2480,
                weather_boost: [1],
                pokebattler_name: 'ENTEI',
                raid_difficulty: [1, 2, 4, 5]
            }
        },
        {
            level: {value: 5, name: 'RAID_LEVEL_5'},
            pokemon: {value: 245, name: 'SUICUNE'},
            form: {value: 1337, name: 'SUICUNE_NORMAL'},
            costume: {value: 0, name: 'UNSET'},
            temp_evolution: {value: 0, name: 'TEMP_EVOLUTION_UNSET'},
            total: 2491,
            encountered: 0,
            shinies: 0,
            stats: {
                cp_20: 1704,
                cp_25: 2130,
                weather_boost: [Array],
                pokebattler_name: 'SUICUNE',
                raid_difficulty: [Array]
            }
        }
    ]
    const raid1 = [{"level": {"value": 1, "name": "RAID_LEVEL_1"}, "pokemon": {"value": 100, "name": "VOLTORB"}, "form": {"value": 2728, "name": "VOLTORB_HISUIAN"}, "costume": {"value": 0, "name": "UNSET"}, "temp_evolution": {"value": 0, "name": "TEMP_EVOLUTION_UNSET"}, "total": 75, "encountered": 0, "shinies": 0, "stats": {"cp_20": 577, "cp_25": 721, "weather_boost": [1, 2], "pokebattler_name": "VOLTORB_HISUIAN_FORM", "raid_difficulty": [1, 1, 1, 1]}}, {"level": {"value": 1, "name": "RAID_LEVEL_1"}, "pokemon": {"value": 403, "name": "SHINX"}, "form": {"value": 0, "name": "FORM_UNSET"}, "costume": {"value": 0, "name": "UNSET"}, "temp_evolution": {"value": 0, "name": "TEMP_EVOLUTION_UNSET"}, "total": 61, "encountered": 0, "shinies": 0, "stats": {"cp_20": 500, "cp_25": 625, "weather_boost": [2], "pokebattler_name": "SHINX", "raid_difficulty": [1, 1, 1, 1]}}, {"level": {"value": 1, "name": "RAID_LEVEL_1"}, "pokemon": {"value": 607, "name": "LITWICK"}, "form": {"value": 0, "name": "FORM_UNSET"}, "costume": {"value": 0, "name": "UNSET"}, "temp_evolution": {"value": 0, "name": "TEMP_EVOLUTION_UNSET"}, "total": 79, "encountered": 0, "shinies": 0, "stats": {"cp_20": 575, "cp_25": 719, "weather_boost": [1, 7], "pokebattler_name": "LITWICK", "raid_difficulty": [1, 1, 1, 1]}}, {"level": {"value": 1, "name": "RAID_LEVEL_1"}, "pokemon": {"value": 667, "name": "LITLEO"}, "form": {"value": 0, "name": "FORM_UNSET"}, "costume": {"value": 0, "name": "UNSET"}, "temp_evolution": {"value": 0, "name": "TEMP_EVOLUTION_UNSET"}, "total": 58, "encountered": 0, "shinies": 0, "stats": {"cp_20": 814, "cp_25": 1018, "weather_boost": [1, 3], "pokebattler_name": "LITLEO", "raid_difficulty": [1, 1, 1, 1]}}, {"level": {"value": 1, "name": "RAID_LEVEL_1"}, "pokemon": {"value": 694, "name": "HELIOPTILE"}, "form": {"value": 0, "name": "FORM_UNSET"}, "costume": {"value": 0, "name": "UNSET"}, "temp_evolution": {"value": 0, "name": "TEMP_EVOLUTION_UNSET"}, "total": 80, "encountered": 0, "shinies": 0, "stats": {"cp_20": 533, "cp_25": 666, "weather_boost": [2, 3], "pokebattler_name": "HELIOPTILE", "raid_difficulty": [1, 1, 1, 1]}}]
    const raid13 = [{"level":{"value":13,"name":"RAID_LEVEL_3_SHADOW"},"pokemon":{"value":125,"name":"ELECTABUZZ"},"form":{"value":640,"name":"ELECTABUZZ_NORMAL"},"costume":{"value":0,"name":"UNSET"},"temp_evolution":{"value":0,"name":"TEMP_EVOLUTION_UNSET"},"total":51,"encountered":0,"shinies":0,"stats":{"cp_20":1333,"cp_25":1667,"weather_boost":[2],"pokebattler_name":"ELECTABUZZ","raid_difficulty":[1,1,1,1]}},{"level":{"value":13,"name":"RAID_LEVEL_3_SHADOW"},"pokemon":{"value":126,"name":"MAGMAR"},"form":{"value":634,"name":"MAGMAR_NORMAL"},"costume":{"value":0,"name":"UNSET"},"temp_evolution":{"value":0,"name":"TEMP_EVOLUTION_UNSET"},"total":41,"encountered":0,"shinies":0,"stats":{"cp_20":1367,"cp_25":1710,"weather_boost":[1],"pokebattler_name":"MAGMAR","raid_difficulty":[1,1,1,1]}},{"level":{"value":13,"name":"RAID_LEVEL_3_SHADOW"},"pokemon":{"value":207,"name":"GLIGAR"},"form":{"value":803,"name":"GLIGAR_NORMAL"},"costume":{"value":0,"name":"UNSET"},"temp_evolution":{"value":0,"name":"TEMP_EVOLUTION_UNSET"},"total":62,"encountered":0,"shinies":0,"stats":{"cp_20":1061,"cp_25":1326,"weather_boost":[1,5],"pokebattler_name":"GLIGAR","raid_difficulty":[1,1,1,1]}}]
    const raid5level = {"value": 5, "name": "RAID_LEVEL_5"}
    const raid1level = {"value": 1, "name": "RAID_LEVEL_1"}
    const raid13level = {"value": 13, "name": 'RAID_LEVEL_3_SHADOW'}
</script>

<HeroShortcut
    title={$_("site.hero_title_raid")}
    subtitle={$_("site.hero_subtitle_raid")}
    link="raids"
>
    <div class="card raid-card-1 absolute w-fit" style="--raid-box-columns: 2" aria-hidden="true">
        <RaidBox level={raid13level} raids={raid13} percentage={0.1}/>
    </div>
    <div class="card raid-card-2 absolute w-fit" style="--raid-box-columns: 2" aria-hidden="true">
        <RaidBox level={raid1level} raids={raid1} percentage={0.25}/>
    </div>
    <div class="card raid-card-3 absolute w-fit" style="--raid-box-columns: 2" aria-hidden="true">
        <RaidBox level={raid5level} raids={raid5} percentage={0.16}/>
    </div>
</HeroShortcut>