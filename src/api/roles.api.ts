import client from "./client";
import type { Role } from "../types";

export const listRoles = async (): Promise<Role[]> => {
    const response = await client.get('/roles/')
    return response.data
}