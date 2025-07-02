import client from "./client";
import type { User } from "../types";

export const listUsers = async (): Promise<User[]> => {
    const response = await client.get('/users/')
    return response.data
}