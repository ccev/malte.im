import type {ApiResponse} from "../../@types/gruntApi";
import {getGruntData} from "$lib/api";

export async function load({ fetch, params }): Promise<ApiResponse> {
    return await getGruntData(24, fetch)
}
