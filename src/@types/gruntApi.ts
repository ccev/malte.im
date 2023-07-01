import type {CharacterDetails} from "../gruntData";
import type {Enum} from "./api";

export interface Reward {
    pokemon: Enum
    form: Enum
    total: number
    shinies: number
}

export interface TeamPokemon {
    pokemon: Enum
    form: Enum
    total: number
    shinies: number
    slot: number
}

export interface Character {
    character: Enum
    rewards: Reward[]
    team: TeamPokemon[]
}

export interface DetailedCharacter {
    character: Enum
    rewards: Reward[]
    team: TeamPokemon[]
    details: CharacterDetails
    thisTotal: number
    rewardTotal: number
    groupTotal: number
}

export interface ApiResponse {
    total: number
    since: number
    characters: Character[]
}