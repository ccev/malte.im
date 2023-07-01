import type {CurrentRaids} from "../../@types/raidApi";
import {raidEndpoint, makeMigration} from "$lib/api";

export async function load({ fetch, params }): Promise<CurrentRaids> {
    const response = await fetch(raidEndpoint)
    const data = await response.json()
    return {
        migration: makeMigration(data.migration),
        raids: data.raids
    }
}
