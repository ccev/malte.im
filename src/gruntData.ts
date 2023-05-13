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
    gender: Gender;
    group: Group;
    quotes: number;
}

interface CharacterMap {
    [key: number]: CharacterDetails;
}


export const CHARACTER_MAP: CharacterMap = {
    4: {
        name: "Typeless",
        gender: Gender.Male,
        group: Group.Grunt,
        quotes: 3
    },
    5: {
        name: "Typeless",
        gender: Gender.Female,
        group: Group.Grunt,
        quotes: 3
    },
    6: {
        name: "Bug",
        gender: Gender.Female,
        group: Group.Grunt,
        quotes: 1
    },
    7: {
        name: "Bug",
        gender: Gender.Male,
        group: Group.Grunt,
        quotes: 1
    },
    8: {
        name: "Dark",
        gender: Gender.Female,
        group: Group.Grunt,
        quotes: 1
    },
    9: {
        name: "Dark",
        gender: Gender.Male,
        group: Group.Grunt,
        quotes: 1
    },
    10: {
        name: "Dark",
        gender: Gender.Female,
        group: Group.Grunt,
        quotes: 1
    },
    11: {
        name: "Dark",
        gender: Gender.Male,
        group: Group.Grunt,
        quotes: 1
    },
    12: {
        name: "Dragon",
        gender: Gender.Female,
        group: Group.Grunt,
        quotes: 1
    },
    13: {
        name: "Dragon",
        gender: Gender.Male,
        group: Group.Grunt,
        quotes: 1
    },
    14: {
        name: "Fairy",
        gender: Gender.Female,
        group: Group.Grunt,
        quotes: 1
    },
    15: {
        name: "Fairy",
        gender: Gender.Male,
        group: Group.Grunt,
        quotes: 1
    },
    16: {
        name: "Fighting",
        gender: Gender.Female,
        group: Group.Grunt,
        quotes: 1
    },
    17: {
        name: "Fighting",
        gender: Gender.Male,
        group: Group.Grunt,
        quotes: 1
    },
    18: {
        name: "Fire",
        gender: Gender.Female,
        group: Group.Grunt,
        quotes: 1
    },
    19: {
        name: "Fire",
        gender: Gender.Male,
        group: Group.Grunt,
        quotes: 1
    },
    20: {
        name: "Flying",
        gender: Gender.Female,
        group: Group.Grunt,
        quotes: 1
    },
    21: {
        name: "Flying",
        gender: Gender.Male,
        group: Group.Grunt,
        quotes: 1
    },
    22: {
        name: "Grass",
        gender: Gender.Female,
        group: Group.Grunt,
        quotes: 1
    },
    23: {
        name: "Grass",
        gender: Gender.Male,
        group: Group.Grunt,
        quotes: 1
    },
    24: {
        name: "Ground",
        gender: Gender.Female,
        group: Group.Grunt,
        quotes: 1
    },
    25: {
        name: "Ground",
        gender: Gender.Male,
        group: Group.Grunt,
        quotes: 1
    },
    26: {
        name: "Ice",
        gender: Gender.Female,
        group: Group.Grunt,
        quotes: 1
    },
    27: {
        name: "Ice",
        gender: Gender.Male,
        group: Group.Grunt,
        quotes: 1
    },
    28: {
        name: "Steel",
        gender: Gender.Female,
        group: Group.Grunt,
        quotes: 1
    },
    29: {
        name: "Steel",
        gender: Gender.Male,
        group: Group.Grunt,
        quotes: 1
    },
    30: {
        name: "Normal",
        gender: Gender.Female,
        group: Group.Grunt,
        quotes: 1
    },
    31: {
        name: "Normal",
        gender: Gender.Male,
        group: Group.Grunt,
        quotes: 1
    },
    32: {
        name: "Poison",
        gender: Gender.Female,
        group: Group.Grunt,
        quotes: 1
    },
    33: {
        name: "Poison",
        gender: Gender.Male,
        group: Group.Grunt,
        quotes: 1
    },
    34: {
        name: "Psychic",
        gender: Gender.Female,
        group: Group.Grunt,
        quotes: 1
    },
    35: {
        name: "Psychic",
        gender: Gender.Male,
        group: Group.Grunt,
        quotes: 1
    },
    36: {
        name: "Rock",
        gender: Gender.Female,
        group: Group.Grunt,
        quotes: 1
    },
    37: {
        name: "Rock",
        gender: Gender.Male,
        group: Group.Grunt,
        quotes: 1
    },
    38: {
        name: "Water",
        gender: Gender.Female,
        group: Group.Grunt,
        quotes: 1
    },
    39: {
        name: "Water",
        gender: Gender.Male,
        group: Group.Grunt,
        quotes: 1
    },
    41: {
        name: "Cliff",
        gender: Gender.Cliff,
        group: Group.Leader,
        quotes: 5
    },
    42: {
        name: "Arlo",
        gender: Gender.Arlo,
        group: Group.Leader,
        quotes: 5
    },
    43: {
        name: "Sierra",
        gender: Gender.Sierra,
        group: Group.Leader,
        quotes: 5
    },
    44: {
        name: "Giovanni",
        gender: Gender.Giovanni,
        group: Group.Giovanni,
        quotes: 5
    },
    45: {
        name: "Decoy",
        gender: Gender.Male,
        group: Group.Giovanni,
        quotes: 10
    },
    46: {
        name: "Decoy",
        gender: Gender.Female,
        group: Group.Giovanni,
        quotes: 10
    },
    47: {
        name: "Ghost",
        gender: Gender.Female,
        group: Group.Grunt,
        quotes: 1
    },
    48: {
        name: "Ghost",
        gender: Gender.Male,
        group: Group.Grunt,
        quotes: 1
    },
    49: {
        name: "Electric",
        gender: Gender.Female,
        group: Group.Grunt,
        quotes: 1
    },
    50: {
        name: "Electric",
        gender: Gender.Male,
        group: Group.Grunt,
        quotes: 1
    },
}