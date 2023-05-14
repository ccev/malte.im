import type {ApiResponse} from "../../@types/gruntApi";

export const gruntEndpoint = "https://rocket.malte.im/api/characters"

export async function getGruntData(hours: number): Promise<ApiResponse> {
    const response = await fetch(gruntEndpoint + "?hours=" + hours)
    return response.json()
}