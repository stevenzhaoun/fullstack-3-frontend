import type { Order } from "../types"
import client from "./client"

export const getOrders = async () => {
    const response = await client.get('/orders')
    return response.data as Order[] 
}