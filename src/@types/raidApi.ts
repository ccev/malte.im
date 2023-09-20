import type {Enum} from "./api";

export interface RawMigration {
    id: number
    time: string
}

export interface Migration {
    id: number
    time: Date
}

interface Stats {
    cp_20: number
    cp_25: number
    weather_boost: Array<number>
    pokebattler_name: string
    raid_difficulty: Array<number>
}

export interface Raid {
    level: Enum
    pokemon: Enum
    form: Enum
    costume: Enum
    temp_evolution: Enum
    total: number
    encountered: number
    shinies: number
    stats: Stats | null
}

export interface CurrentRaids {
    migration: Migration
    raids: Raid[]
}