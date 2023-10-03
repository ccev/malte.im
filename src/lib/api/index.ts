import type {ApiResponse} from "../../@types/gruntApi";
import type {RawMigration, Migration, CurrentRaids} from "../../@types/raidApi";

const api = "https://rocket.malte.im/api"
export const gruntEndpoint = api + "/characters"
export const raidEndpoint = api + "/raids"
import { error } from '@sveltejs/kit'

function handleFetchErrors(response: Response) {
    if (!response.ok) {
        if (response.status >= 500 && response.status < 600) {
            throw error(response.status, {message: "Can't reach the API. Please try again later"})
        }
        throw error(response.status, {message: response.statusText})
    }
}

export async function getGruntData(hours: number, fetch: CallableFunction): Promise<ApiResponse> {
    const response = await fetch(gruntEndpoint + "?hours=" + hours)
    handleFetchErrors(response)
    return response.json()
}

export async function getRaidData(fetch: CallableFunction): Promise<CurrentRaids> {
    const response = await fetch(raidEndpoint)
    handleFetchErrors(response)
    const data = await response.json()
    return {
        migration: {
            id: data.migration.id,
            time: new Date(data.migration.time)
        },
        raids: data.raids
    }
}
