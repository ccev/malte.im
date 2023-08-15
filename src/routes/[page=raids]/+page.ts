import type {CurrentRaids} from "../../@types/raidApi";
import {getRaidData} from "$lib/api";

export async function load({ fetch, params }): Promise<CurrentRaids> {
    return await getRaidData(fetch)
}
