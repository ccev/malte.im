import type {ApiResponse} from "../../@types/gruntApi";
import {gruntEndpoint} from "$lib/api";

export async function load({ fetch, params }): Promise<ApiResponse> {
    const response = await fetch(gruntEndpoint)
    return response.json()
}
