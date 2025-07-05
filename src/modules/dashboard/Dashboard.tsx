import { CircularProgress, Typography } from "@mui/material"
import { BarChart } from "@mui/x-charts"
import useDataLoad from "../../hooks/useDataLoad"
import { getOrders } from "../../api/orders.api"
import type { Order } from "../../types"

export default function Dashboard() {

    const { data: orders, isLoading, error } = useDataLoad(getOrders)

    if(isLoading || !orders) {
        return <CircularProgress />
    }

    /*
    {
        '2025-01-01': [order1, order2],
        '2025-01-02': [order3, order4],
        '2025-01-03': [order5, order6]
    }
    */

    const groupedOrders = orders.reduce((acc, order) => {
        const dayStr = order.createdAt.split('T')[0]
        if(acc[dayStr]) {
            acc[dayStr].push(order)
        } else {
            acc[dayStr] = [order]
        }
        return acc
    }, {} as Record<string, Order[]>)

    const dates = Object.keys(groupedOrders).sort()
    const seriesData = dates.map(date => {
        const orders = groupedOrders[date]
        return orders.length
    })

    const xAxis = dates
    const series = [{ data: seriesData, label: 'Orders' }]

    return <div>
        <Typography variant="h4">Dashboard</Typography>
        <BarChart
            xAxis={[{ data: xAxis }]}
            series={series}
            height={300}
        />
    </div>
}