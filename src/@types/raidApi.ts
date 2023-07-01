import type {Enum} from "./api";

export interface RawMigration {
    id: number
    time: string
}

export interface Migration {
    id: number
    time: Date
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
}

export interface CurrentRaids {
    migration: Migration
    raids: Raid[]
}