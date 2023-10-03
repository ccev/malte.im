<script>
    import Layout from "../components/layout/Layout.svelte";
    import HeroShortcut from "./HeroShortcut.svelte";
    import GruntBox from "../components/GruntBox.svelte";
    import Box from "../components/design/Box.svelte";
    import "./heroShortcut.css"
    import {_} from "svelte-i18n";
    import RaidBox from "./[page=raids]/RaidBox.svelte";
    import HeroDiscord from "./HeroDiscord.svelte";
    import HeroKofi from "./HeroKofi.svelte";

    const fairy = {
        "character": {"value": 14, "name": "CHARACTER_FAIRY_GRUNT_FEMALE"},
        "rewards": [{
            "pokemon": {"value": 209, "name": "SNUBBULL"},
            "form": {"value": 0, "name": "FORM_UNSET"},
            "total": 5983,
            "shinies": 0
        }, {
            "pokemon": {"value": 210, "name": "GRANBULL"},
            "form": {"value": 0, "name": "FORM_UNSET"},
            "total": 270,
            "shinies": 0
        }, {
            "pokemon": {"value": 280, "name": "RALTS"},
            "form": {"value": 0, "name": "FORM_UNSET"},
            "total": 5015,
            "shinies": 0
        }, {
            "pokemon": {"value": 281, "name": "KIRLIA"},
            "form": {"value": 0, "name": "FORM_UNSET"},
            "total": 1106,
            "shinies": 0
        }, {
            "pokemon": {"value": 303, "name": "MAWILE"},
            "form": {"value": 0, "name": "FORM_UNSET"},
            "total": 2453,
            "shinies": 14
        }],
        "team": [{
            "pokemon": {"value": 209, "name": "SNUBBULL"},
            "form": {"value": 0, "name": "FORM_UNSET"},
            "slot": 0,
            "total": 5881
        }, {
            "pokemon": {"value": 280, "name": "RALTS"},
            "form": {"value": 0, "name": "FORM_UNSET"},
            "slot": 0,
            "total": 5989
        }, {
            "pokemon": {"value": 303, "name": "MAWILE"},
            "form": {"value": 0, "name": "FORM_UNSET"},
            "slot": 0,
            "total": 2957
        }, {
            "pokemon": {"value": 209, "name": "SNUBBULL"},
            "form": {"value": 0, "name": "FORM_UNSET"},
            "slot": 1,
            "total": 6636
        }, {
            "pokemon": {"value": 210, "name": "GRANBULL"},
            "form": {"value": 0, "name": "FORM_UNSET"},
            "slot": 1,
            "total": 1435
        }, {
            "pokemon": {"value": 281, "name": "KIRLIA"},
            "form": {"value": 0, "name": "FORM_UNSET"},
            "slot": 1,
            "total": 6756
        }, {
            "pokemon": {"value": 210, "name": "GRANBULL"},
            "form": {"value": 0, "name": "FORM_UNSET"},
            "slot": 2,
            "total": 8697
        }, {
            "pokemon": {"value": 281, "name": "KIRLIA"},
            "form": {"value": 0, "name": "FORM_UNSET"},
            "slot": 2,
            "total": 6130
        }],
        "details": {"name": "Fairy", "gender": 5, "group": 3, "quotes": 1},
        "thisTotal": 14827,
        "rewardTotal": 14827,
        "groupTotal": 344459
    }
    const arlo = {"character":{"value":42,"name":"CHARACTER_EXECUTIVE_ARLO"},"rewards":[{"pokemon":{"value":190,"name":"AIPOM"},"form":{"value":0,"name":"FORM_UNSET"},"total":17546,"shinies":283}],"team":[{"pokemon":{"value":190,"name":"AIPOM"},"form":{"value":0,"name":"FORM_UNSET"},"slot":0,"total":17546},{"pokemon":{"value":65,"name":"ALAKAZAM"},"form":{"value":0,"name":"FORM_UNSET"},"slot":1,"total":6100},{"pokemon":{"value":319,"name":"SHARPEDO"},"form":{"value":0,"name":"FORM_UNSET"},"slot":1,"total":6142},{"pokemon":{"value":429,"name":"MISMAGIUS"},"form":{"value":0,"name":"FORM_UNSET"},"slot":1,"total":5304},{"pokemon":{"value":143,"name":"SNORLAX"},"form":{"value":0,"name":"FORM_UNSET"},"slot":2,"total":2006},{"pokemon":{"value":212,"name":"SCIZOR"},"form":{"value":0,"name":"FORM_UNSET"},"slot":2,"total":11106},{"pokemon":{"value":462,"name":"MAGNEZONE"},"form":{"value":0,"name":"FORM_UNSET"},"slot":2,"total":4434}],"details":{"name":"Arlo","gender":42,"group":0,"quotes":5},"thisTotal":17546,"rewardTotal":17546,"groupTotal":52525}
    const electric = {"character":{"value":49,"name":"CHARACTER_ELECTRIC_GRUNT_FEMALE"},"rewards":[{"pokemon":{"value":74,"name":"GEODUDE"},"form":{"value":68,"name":"GEODUDE_ALOLA"},"total":3190,"shinies":0},{"pokemon":{"value":100,"name":"VOLTORB"},"form":{"value":0,"name":"FORM_UNSET"},"total":2329,"shinies":0},{"pokemon":{"value":179,"name":"MAREEP"},"form":{"value":0,"name":"FORM_UNSET"},"total":10876,"shinies":0},{"pokemon":{"value":403,"name":"SHINX"},"form":{"value":0,"name":"FORM_UNSET"},"total":10884,"shinies":0},{"pokemon":{"value":522,"name":"BLITZLE"},"form":{"value":0,"name":"FORM_UNSET"},"total":5478,"shinies":0}],"team":[{"pokemon":{"value":179,"name":"MAREEP"},"form":{"value":0,"name":"FORM_UNSET"},"slot":0,"total":13127},{"pokemon":{"value":403,"name":"SHINX"},"form":{"value":0,"name":"FORM_UNSET"},"slot":0,"total":13110},{"pokemon":{"value":522,"name":"BLITZLE"},"form":{"value":0,"name":"FORM_UNSET"},"slot":0,"total":6520},{"pokemon":{"value":74,"name":"GEODUDE"},"form":{"value":68,"name":"GEODUDE_ALOLA"},"slot":1,"total":19294},{"pokemon":{"value":100,"name":"VOLTORB"},"form":{"value":0,"name":"FORM_UNSET"},"slot":1,"total":13463},{"pokemon":{"value":181,"name":"AMPHAROS"},"form":{"value":0,"name":"FORM_UNSET"},"slot":2,"total":10722},{"pokemon":{"value":405,"name":"LUXRAY"},"form":{"value":0,"name":"FORM_UNSET"},"slot":2,"total":11116},{"pokemon":{"value":523,"name":"ZEBSTRIKA"},"form":{"value":0,"name":"FORM_UNSET"},"slot":2,"total":10919}],"details":{"name":"Electric","gender":5,"group":3,"quotes":1},"thisTotal":32757,"rewardTotal":32757,"groupTotal":455431}

    const raid5 = [
        {
            level: { value: 5, name: 'RAID_LEVEL_5' },
            pokemon: { value: 243, name: 'RAIKOU' },
            form: { value: 1331, name: 'RAIKOU_NORMAL' },
            costume: { value: 0, name: 'UNSET' },
            temp_evolution: { value: 0, name: 'TEMP_EVOLUTION_UNSET' },
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
            level: { value: 5, name: 'RAID_LEVEL_5' },
            pokemon: { value: 244, name: 'ENTEI' },
            form: { value: 1334, name: 'ENTEI_NORMAL' },
            costume: { value: 0, name: 'UNSET' },
            temp_evolution: { value: 0, name: 'TEMP_EVOLUTION_UNSET' },
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
            level: { value: 5, name: 'RAID_LEVEL_5' },
            pokemon: { value: 245, name: 'SUICUNE' },
            form: { value: 1337, name: 'SUICUNE_NORMAL' },
            costume: { value: 0, name: 'UNSET' },
            temp_evolution: { value: 0, name: 'TEMP_EVOLUTION_UNSET' },
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
    const raid5level = {"value":5, "name":"RAID_LEVEL_5"}
    const raid1level = {"value": 1, "name": "RAID_LEVEL_1"}
    const raid13level = {"value": 13, "name": 'RAID_LEVEL_3_SHADOW' }
</script>

<Layout scrollToFooter={true}>
    <div class="max-w-5xl mx-auto grid gap-4">


        <HeroShortcut
            title={$_("site.hero_title_rocket")}
            subtitle={$_("site.hero_subtitle_rocket")}
            link="/rocket"
        >
            <div class="card grunt-card-1 w-72 absolute " aria-hidden="true">
                <GruntBox char={arlo}/>
            </div>
            <div class="card grunt-card-2 w-72 absolute " aria-hidden="true">
                <GruntBox char={fairy}/>
            </div>
            <div class="card grunt-card-3 w-72 absolute " aria-hidden="true">
                <GruntBox char={electric}/>
            </div>
        </HeroShortcut>
        <HeroShortcut
        title={$_("site.hero_title_raid")}
        subtitle={$_("site.hero_subtitle_raid")}
        link="raids"
        >
            <div class="card raid-card-1 absolute" style="--raid-box-columns: 1" aria-hidden="true">
                <RaidBox level={raid13level} raids={raid5} percentage={0.1}/>
            </div>
            <div class="card raid-card-2 absolute" style="--raid-box-columns: 3" aria-hidden="true">
                <RaidBox level={raid1level} raids={raid5} percentage={0.1}/>
            </div>
            <div class="card raid-card-3 absolute" style="--raid-box-columns: 2" aria-hidden="true">
                <RaidBox level={raid5level} raids={raid5} percentage={0.1}/>
            </div>
        </HeroShortcut>

        <div class="flex gap-3">
            <HeroDiscord />
            <HeroKofi />
        </div>
    </div>
</Layout>
