const QUOTE_BUG = "Go, my super bug Pokémon!"
const QUOTE_DARK = "Wherever there is light, there is also shadow."
const QUOTE_DRAGON = "ROAR! ...How’d that sound?"
const QUOTE_ELECTRIC = "Get ready to be shocked!"
const QUOTE_FAIRY = "Check out my cute Pokémon!"
const QUOTE_FIGHTING = "This buff physique isn’t just for show!"
const QUOTE_FIRE = "Do you know how hot Pokémon fire breath can get?"
const QUOTE_FLYING = "Battle against my Flying-type Pokémon!"
const QUOTE_GHOST = "Ke... ke... ke... ke... ke... ke!"
const QUOTE_GRASS = "Don’t tangle with us!"
const QUOTE_GROUND = "You’ll be defeated into the ground!"
const QUOTE_ICE = "You’re gonna be frozen in your tracks."
const QUOTE_NORMAL = "Normal does not mean weak."
const QUOTE_POISON = "Coiled and ready to strike!"
const QUOTE_PSYCHIC = "Are you scared of psychics that use unseen power?"
const QUOTE_ROCK = "Let’s rock and roll!"
const QUOTE_STEEL = "You’re no match for my iron will!"
const QUOTE_WATER = "These waters are treacherous!"

const QUOTE_GENERIC_1 = "Winning is for winners."
const QUOTE_GENERIC_2 = "Don’t bother — I’ve already won."
const QUOTE_GENERIC_3 = "Get ready to be defeated!"
const QUOTES_GENERIC = [QUOTE_GENERIC_1, QUOTE_GENERIC_2, QUOTE_GENERIC_3]

const QUOTE_SIERRA_1 = "I envy you—you get to battle me!"
const QUOTE_SIERRA_2 = "This will be a battle I’m sure you’ll never forget."
const QUOTE_SIERRA_3 = "You already know this, but you don’t stand a chance."
const QUOTE_SIERRA_4 = "You can’t possibly match my skill, dear."
const QUOTE_SIERRA_5 = "I do hope you like the taste of failure!"
const QUOTES_SIERRA = [QUOTE_SIERRA_1, QUOTE_SIERRA_2, QUOTE_SIERRA_3, QUOTE_SIERRA_4, QUOTE_SIERRA_5]

const QUOTE_ARLO_1 = "It’s time to learn your place in the world."
const QUOTE_ARLO_2 = "I never lose."
const QUOTE_ARLO_3 = "Prepare yourself for a world of hurt."
const QUOTE_ARLO_4 = "Arrogance leads to failure."
const QUOTE_ARLO_5 = "Your defeat comes on swift wings."
const QUOTES_ARLO = [QUOTE_ARLO_1, QUOTE_ARLO_2, QUOTE_ARLO_3, QUOTE_ARLO_4, QUOTE_ARLO_5]

const QUOTE_CLIFF_1 = "My strength comes from my loyalty to Team GO Rocket."
const QUOTE_CLIFF_2 = "I will do anything and everything for Team GO Rocket."
const QUOTE_CLIFF_3 = "I owe the boss my life. I’d do anything for him."
const QUOTE_CLIFF_4 = "Team GO Rocket saved me. It’s time to return the favor!"
const QUOTE_CLIFF_5 = "Add my name to your list of weaknesses."
const QUOTES_CLIFF = [QUOTE_CLIFF_1, QUOTE_CLIFF_2, QUOTE_CLIFF_3, QUOTE_CLIFF_4, QUOTE_CLIFF_5]

const QUOTE_DECOY_1 = "Fooled ya, twerp."
const QUOTE_DECOY_2 = "What, did you think finding the boss was going to be that easy?"
const QUOTE_DECOY_3 = "I can’t believe you fell for it!"
const QUOTE_DECOY_4 = "In the name of the boss, I’ll destroy you!"
const QUOTE_DECOY_5 = "You’ll never get to him!"
const QUOTE_DECOY_6 = "It feels good to see you disappointed."
const QUOTE_DECOY_7 = "Wanna get to the boss, do ya? You’ll have to defeat me!"
const QUOTE_DECOY_8 = "I’ll do anything to protect the boss!"
const QUOTE_DECOY_9 = "You’ve been bamboozled, punk!"
const QUOTE_DECOY_10 = "Get lost! You’ll never find him."
const QUOTES_DECOY = [
    QUOTE_DECOY_1,
    QUOTE_DECOY_2,
    QUOTE_DECOY_3,
    QUOTE_DECOY_4,
    QUOTE_DECOY_5,
    QUOTE_DECOY_6,
    QUOTE_DECOY_7,
    QUOTE_DECOY_8,
    QUOTE_DECOY_9,
    QUOTE_DECOY_10
]

const QUOTE_GIOVANNI_1 = "I will not tolerate your interference."
const QUOTE_GIOVANNI_2 = "You cannot stop me...but I’m amused by your attempt."
const QUOTE_GIOVANNI_3 = "Your professor has not prepared you for what is to come."
const QUOTE_GIOVANNI_4 = "You’ve made it this far. Let me see just how strong you are."
const QUOTE_GIOVANNI_5 = "You will never defeat Team GO Rocket."
const QUOTES_GIOVANNI = [QUOTE_GIOVANNI_1, QUOTE_GIOVANNI_2, QUOTE_GIOVANNI_3, QUOTE_GIOVANNI_4, QUOTE_GIOVANNI_5]

export enum Gender {
    Male = 4,
    Female = 5,
    Cliff = 41,
    Arlo = 42,
    Sierra = 43,
    Giovanni = 44
}

export enum Group {
    Leader = 0,
    Giovanni = 2,
    Grunt = 3,
}

export interface CharacterDetails {
    name: string;
    quote: string;
    gender: Gender;
    group: Group;
}

interface CharacterMap {
    [key: number]: CharacterDetails;
}

function sample(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
}


export const CHARACTER_MAP: CharacterMap = {
    4: {
        name: "Typeless",
        quote: sample(QUOTES_GENERIC),
        gender: Gender.Male,
        group: Group.Grunt
    },
    5: {
        name: "Typeless",
        quote: sample(QUOTES_GENERIC),
        gender: Gender.Female,
        group: Group.Grunt
    },
    6: {
        name: "Bug",
        quote: QUOTE_BUG,
        gender: Gender.Female,
        group: Group.Grunt
    },
    7: {
        name: "Bug",
        quote: QUOTE_BUG,
        gender: Gender.Male,
        group: Group.Grunt
    },
    8: {
        name: "Dark",
        quote: QUOTE_DARK,
        gender: Gender.Female,
        group: Group.Grunt
    },
    9: {
        name: "Dark",
        quote: QUOTE_DARK,
        gender: Gender.Male,
        group: Group.Grunt
    },
    10: {
        name: "Dark",
        quote: QUOTE_DARK,
        gender: Gender.Female,
        group: Group.Grunt
    },
    11: {
        name: "Dark",
        quote: QUOTE_DARK,
        gender: Gender.Male,
        group: Group.Grunt
    },
    12: {
        name: "Dragon",
        quote: QUOTE_DRAGON,
        gender: Gender.Female,
        group: Group.Grunt
    },
    13: {
        name: "Dragon",
        quote: QUOTE_DRAGON,
        gender: Gender.Male,
        group: Group.Grunt
    },
    14: {
        name: "Fairy",
        quote: QUOTE_FAIRY,
        gender: Gender.Female,
        group: Group.Grunt
    },
    15: {
        name: "Fairy",
        quote: QUOTE_FAIRY,
        gender: Gender.Male,
        group: Group.Grunt
    },
    16: {
        name: "Fighting",
        quote: QUOTE_FIGHTING,
        gender: Gender.Female,
        group: Group.Grunt
    },
    17: {
        name: "Fighting",
        quote: QUOTE_FIGHTING,
        gender: Gender.Male,
        group: Group.Grunt
    },
    18: {
        name: "Fire",
        quote: QUOTE_FIRE,
        gender: Gender.Female,
        group: Group.Grunt
    },
    19: {
        name: "Fire",
        quote: QUOTE_FIRE,
        gender: Gender.Male,
        group: Group.Grunt
    },
    20: {
        name: "Flying",
        quote: QUOTE_FLYING,
        gender: Gender.Female,
        group: Group.Grunt
    },
    21: {
        name: "Flying",
        quote: QUOTE_FLYING,
        gender: Gender.Male,
        group: Group.Grunt
    },
    22: {
        name: "Grass",
        quote: QUOTE_GRASS,
        gender: Gender.Female,
        group: Group.Grunt
    },
    23: {
        name: "Grass",
        quote: QUOTE_GRASS,
        gender: Gender.Male,
        group: Group.Grunt
    },
    24: {
        name: "Ground",
        quote: QUOTE_GROUND,
        gender: Gender.Female,
        group: Group.Grunt
    },
    25: {
        name: "Ground",
        quote: QUOTE_GROUND,
        gender: Gender.Male,
        group: Group.Grunt
    },
    26: {
        name: "Ice",
        quote: QUOTE_ICE,
        gender: Gender.Female,
        group: Group.Grunt
    },
    27: {
        name: "Ice",
        quote: QUOTE_ICE,
        gender: Gender.Male,
        group: Group.Grunt
    },
    28: {
        name: "Steel",
        quote: QUOTE_STEEL,
        gender: Gender.Female,
        group: Group.Grunt
    },
    29: {
        name: "Steel",
        quote: QUOTE_STEEL,
        gender: Gender.Male,
        group: Group.Grunt
    },
    30: {
        name: "Normal",
        quote: QUOTE_NORMAL,
        gender: Gender.Female,
        group: Group.Grunt
    },
    31: {
        name: "Normal",
        quote: QUOTE_NORMAL,
        gender: Gender.Male,
        group: Group.Grunt
    },
    32: {
        name: "Poison",
        quote: QUOTE_POISON,
        gender: Gender.Female,
        group: Group.Grunt
    },
    33: {
        name: "Poison",
        quote: QUOTE_POISON,
        gender: Gender.Male,
        group: Group.Grunt
    },
    34: {
        name: "Psychic",
        quote: QUOTE_PSYCHIC,
        gender: Gender.Female,
        group: Group.Grunt
    },
    35: {
        name: "Psychic",
        quote: QUOTE_PSYCHIC,
        gender: Gender.Male,
        group: Group.Grunt
    },
    36: {
        name: "Rock",
        quote: QUOTE_ROCK,
        gender: Gender.Female,
        group: Group.Grunt
    },
    37: {
        name: "Rock",
        quote: QUOTE_ROCK,
        gender: Gender.Male,
        group: Group.Grunt
    },
    38: {
        name: "Water",
        quote: QUOTE_WATER,
        gender: Gender.Female,
        group: Group.Grunt
    },
    39: {
        name: "Water",
        quote: QUOTE_WATER,
        gender: Gender.Male,
        group: Group.Grunt
    },
    41: {
        name: "Cliff",
        quote: sample(QUOTES_CLIFF),
        gender: Gender.Cliff,
        group: Group.Leader
    },
    42: {
        name: "Arlo",
        quote: sample(QUOTES_ARLO),
        gender: Gender.Arlo,
        group: Group.Leader
    },
    43: {
        name: "Sierra",
        quote: sample(QUOTES_SIERRA),
        gender: Gender.Sierra,
        group: Group.Leader
    },
    44: {
        name: "Giovanni",
        quote: sample(QUOTES_GIOVANNI),
        gender: Gender.Giovanni,
        group: Group.Giovanni
    },
    45: {
        name: "Decoy",
        quote: sample(QUOTES_DECOY),
        gender: Gender.Male,
        group: Group.Giovanni
    },
    46: {
        name: "Decoy",
        quote: sample(QUOTES_DECOY),
        gender: Gender.Female,
        group: Group.Giovanni
    },
    47: {
        name: "Ghost",
        quote: QUOTE_GHOST,
        gender: Gender.Female,
        group: Group.Grunt
    },
    48: {
        name: "Ghost",
        quote: QUOTE_GHOST,
        gender: Gender.Male,
        group: Group.Grunt
    },
    49: {
        name: "Electric",
        quote: QUOTE_ELECTRIC,
        gender: Gender.Female,
        group: Group.Grunt
    },
    50: {
        name: "Electric",
        quote: QUOTE_ELECTRIC,
        gender: Gender.Male,
        group: Group.Grunt
    },
}