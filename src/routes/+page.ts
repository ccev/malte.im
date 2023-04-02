import type {ApiResponse} from "../@types/gruntApi";

export async function load(): Promise<ApiResponse> {
    const response = await fetch("https://rocket.malte.im/api/characters")
    return response.json()
}

// export type { ApiResponse, Character, TeamPokemon, Enum, Reward }