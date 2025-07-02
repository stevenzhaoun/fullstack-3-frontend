import client from "./client";
import type { User } from "../types";

export const listUsers = async (): Promise<User[]> => {
    const response = await client.get('/users/')
    return response.data
}

export const createUser = async (user: any): Promise<User> => {
    const response = await client.post('/users', user) 
    return response.data
}

export const getUser = async (userId: string): Promise<User> => {
    const response = await client.get(`/users/${userId}`)
    return response.data
}

export const updateUser = async (userId: string, user: any): Promise<User> => {
    const response = await client.put(`/users/${userId}`, user)
    return response.data
}