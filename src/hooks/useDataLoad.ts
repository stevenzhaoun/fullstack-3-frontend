import { useEffect, useState } from "react";

export default function useDataLoad<T>(apiLoader: () => Promise<T>) {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const data = await apiLoader()
            setData(data)
            setIsLoading(false)
        }
        fetchData()
    }, [])

    return {
        data,
        isLoading,
    }
}