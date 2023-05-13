const fs = require('fs');

const characters = {
    "UNSET": 0,
    "BLANCHE": 1,
    "CANDELA": 2,
    "SPARK": 3,
    "GRUNT_MALE": 4,
    "GRUNT_FEMALE": 5,
    "BUG_GRUNT_FEMALE": 6,
    "BUG_GRUNT_MALE": 7,
    "DARKNESS_GRUNT_FEMALE": 8,
    "DARKNESS_GRUNT_MALE": 9,
    "DARK_GRUNT_FEMALE": 10,
    "DARK_GRUNT_MALE": 11,
    "DRAGON_GRUNT_FEMALE": 12,
    "DRAGON_GRUNT_MALE": 13,
    "FAIRY_GRUNT_FEMALE": 14,
    "FAIRY_GRUNT_MALE": 15,
    "FIGHTING_GRUNT_FEMALE": 16,
    "FIGHTING_GRUNT_MALE": 17,
    "FIRE_GRUNT_FEMALE": 18,
    "FIRE_GRUNT_MALE": 19,
    "FLYING_GRUNT_FEMALE": 20,
    "FLYING_GRUNT_MALE": 21,
    "GRASS_GRUNT_FEMALE": 22,
    "GRASS_GRUNT_MALE": 23,
    "GROUND_GRUNT_FEMALE": 24,
    "GROUND_GRUNT_MALE": 25,
    "ICE_GRUNT_FEMALE": 26,
    "ICE_GRUNT_MALE": 27,
    "METAL_GRUNT_FEMALE": 28,
    "METAL_GRUNT_MALE": 29,
    "NORMAL_GRUNT_FEMALE": 30,
    "NORMAL_GRUNT_MALE": 31,
    "POISON_GRUNT_FEMALE": 32,
    "POISON_GRUNT_MALE": 33,
    "PSYCHIC_GRUNT_FEMALE": 34,
    "PSYCHIC_GRUNT_MALE": 35,
    "ROCK_GRUNT_FEMALE": 36,
    "ROCK_GRUNT_MALE": 37,
    "WATER_GRUNT_FEMALE": 38,
    "WATER_GRUNT_MALE": 39,
    "PLAYER_TEAM_LEADER": 40,
    "CHARACTER_EXECUTIVE_CLIFF": 41,
    "CHARACTER_EXECUTIVE_ARLO": 42,
    "CHARACTER_EXECUTIVE_SIERRA": 43,
    "CHARACTER_EXECUTIVE_GIOVANNI": 44,
    "DECOY_GRUNT_MALE": 45,
    "DECOY_GRUNT_FEMALE": 46,
    "GHOST_GRUNT_FEMALE": 47,
    "GHOST_GRUNT_MALE": 48,
    "ELECTRIC_GRUNT_FEMALE": 49,
    "ELECTRIC_GRUNT_MALE": 50,
    "BALLOON_GRUNT_FEMALE": 51,
    "BALLOON_GRUNT_MALE": 52,
    "GRUNTB_FEMALE": 53,
    "GRUNTB_MALE": 54,
    "BUG_BALLOON_GRUNT_FEMALE": 55,
    "BUG_BALLOON_GRUNT_MALE": 56,
    "DARK_BALLOON_GRUNT_FEMALE": 57,
    "DARK_BALLOON_GRUNT_MALE": 58,
    "DRAGON_BALLOON_GRUNT_FEMALE": 59,
    "DRAGON_BALLOON_GRUNT_MALE": 60,
    "FAIRY_BALLOON_GRUNT_FEMALE": 61,
    "FAIRY_BALLOON_GRUNT_MALE": 62,
    "FIGHTING_BALLOON_GRUNT_FEMALE": 63,
    "FIGHTING_BALLOON_GRUNT_MALE": 64,
    "FIRE_BALLOON_GRUNT_FEMALE": 65,
    "FIRE_BALLOON_GRUNT_MALE": 66,
    "FLYING_BALLOON_GRUNT_FEMALE": 67,
    "FLYING_BALLOON_GRUNT_MALE": 68,
    "GRASS_BALLOON_GRUNT_FEMALE": 69,
    "GRASS_BALLOON_GRUNT_MALE": 70,
    "GROUND_BALLOON_GRUNT_FEMALE": 71,
    "GROUND_BALLOON_GRUNT_MALE": 72,
    "ICE_BALLOON_GRUNT_FEMALE": 73,
    "ICE_BALLOON_GRUNT_MALE": 74,
    "METAL_BALLOON_GRUNT_FEMALE": 75,
    "METAL_BALLOON_GRUNT_MALE": 76,
    "NORMAL_BALLOON_GRUNT_FEMALE": 77,
    "NORMAL_BALLOON_GRUNT_MALE": 78,
    "POISON_BALLOON_GRUNT_FEMALE": 79,
    "POISON_BALLOON_GRUNT_MALE": 80,
    "PSYCHIC_BALLOON_GRUNT_FEMALE": 81,
    "PSYCHIC_BALLOON_GRUNT_MALE": 82,
    "ROCK_BALLOON_GRUNT_FEMALE": 83,
    "ROCK_BALLOON_GRUNT_MALE": 84,
    "WATER_BALLOON_GRUNT_FEMALE": 85,
    "WATER_BALLOON_GRUNT_MALE": 86,
    "GHOST_BALLOON_GRUNT_FEMALE": 87,
    "GHOST_BALLOON_GRUNT_MALE": 88,
    "ELECTRIC_BALLOON_GRUNT_FEMALE": 89,
    "ELECTRIC_BALLOON_GRUNT_MALE": 90,
    "WILLOW": 91,
    "WILLOWB": 92,
    "EVENT_NPC_0": 500,
    "EVENT_NPC_1": 501,
    "EVENT_NPC_2": 502,
    "EVENT_NPC_3": 503,
    "EVENT_NPC_4": 504,
    "EVENT_NPC_5": 505,
    "EVENT_NPC_6": 506,
    "EVENT_NPC_7": 507,
    "EVENT_NPC_8": 508,
    "EVENT_NPC_9": 509,
    "EVENT_NPC_10": 510,
    "EVENT_NPC_BLANCHE": 511,
    "EVENT_NPC_CANDELA": 512,
    "EVENT_NPC_SPARK": 513,
    "EVENT_NPC_11": 514,
    "EVENT_NPC_12": 515,
    "EVENT_NPC_13": 516,
    "EVENT_NPC_14": 517,
    "EVENT_NPC_15": 518,
    "EVENT_NPC_16": 519,
    "EVENT_NPC_17": 520,
    "EVENT_NPC_18": 521,
    "EVENT_NPC_19": 522,
    "EVENT_NPC_20": 523,
};

const languages = [
    ["brazilianportuguese", "pt"],
    ["chinesetraditional", "zh"],
    ["english", "en"],
    ["french", "fr"],
    ["german", "de"],
    ["hindi", "hi"],
    ["indonesian", "id"],
    ["italian", "it"],
    ["japanese", "ja"],
    ["korean", "ko"],
    ["russian", "ru"],
    ["spanish", "es"],
    ["thai", "th"],
    ["turkish", "tr"],
]

async function fetchQuotes() {
    for (const [language, langCode] of languages) {
        const quotes = {};
        const names = {};
        const response = await fetch(`https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Texts/Latest%20APK/JSON/i18n_${language}.json`);
        const data = await response.json();

        for (let i = 0; i < data.data.length; i += 2) {
            const key = data.data[i];
            const value = data.data[i + 1];
            if (key.startsWith('combat_') && key.includes('quote')) {
                const parts = key.split('_');
                if (['arlo', 'cliff', 'sierra', 'giovanni'].includes(parts[1])) {
                    const nr = parts[2].split('#')[1];
                    quotes[`${characters['CHARACTER_EXECUTIVE_' + parts[1].toUpperCase()]}_${nr}`] = value;
                } else if (parts[1] === 'grunt') {
                    if (parts[2] === 'decoy') {
                        const nr = parts[3].split('#')[1];
                        for (const id_ of [characters.DECOY_GRUNT_MALE, characters.DECOY_GRUNT_FEMALE]) {
                            quotes[`${id_}_${nr}`] = value;
                        }
                    } else if (parts[3] === '') {
                        const nr = parts[2].split('#')[1];
                        const id_ = characters['GRUNT_' + parts[4].toUpperCase()];
                        quotes[`${id_}_${nr}`] = value;
                    } else if (parts.length >= 5 && parts[4] === '' && parts[2] === 'quote') {
                        const id_ = characters[`${parts[3].toUpperCase()}_GRUNT_${parts[5].toUpperCase()}`];
                        if (id_ === undefined) {
                            continue;
                        }
                        quotes[id_] = value;
                    }
                }
            } else if (key.startsWith("pokemon_type_")) {
                const parts = key.split('_')
                let typeName = parts[2].toUpperCase()

                if (typeName === "STEEL") {
                    typeName = "METAL"
                }

                const ids = [
                    characters[`${typeName}_GRUNT_MALE`],
                    characters[`${typeName}_GRUNT_FEMALE`]
                ]

                ids.forEach(id => {
                    names[id] = value
                })
            }
        }

        const filePath = `src/lib/i18n/locales/${langCode}.json`;

        // Read the existing JSON file
        let jsonData = fs.readFileSync(filePath, 'utf-8');
        if (!jsonData) {
            jsonData = "{}"
        }
        const existingLocale = JSON.parse(jsonData);

        existingLocale.grunt_quotes = quotes
        existingLocale.grunt_names = {...existingLocale.grunt_names, ...names};

        // Write the updated JSON back to the file
        fs.writeFileSync(filePath, JSON.stringify(existingLocale, null, 4));

        console.log(`grunt_quotes updated in ${filePath}`);
    }
}

fetchQuotes().catch((error) => {
    console.error('Error:', error.message);
});