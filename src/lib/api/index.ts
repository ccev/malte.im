import type {ApiResponse} from "../../@types/gruntApi";
import type {RawMigration, Migration} from "../../@types/raidApi";

const api = "https://rocket.malte.im/api"
export const gruntEndpoint = api + "/characters"
export const raidEndpoint = api + "/raids"

export async function getGruntData(hours: number): Promise<ApiResponse> {
    const response = await fetch(gruntEndpoint + "?hours=" + hours)
    return response.json()
}

export function makeMigration(rawMigration: RawMigration): Migration {
    return {
        id: rawMigration.id,
        time: new Date(rawMigration.time)
    }
}
