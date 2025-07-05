import { useEffect, useState } from "react";

export default function useDataLoad<T>(apiLoader: () => Promise<T>) {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const data = await apiLoader()
                setData(data)
            } catch (error) {
                console.error(error)
                setError(error as string)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    return {
        data,
        isLoading,
        error,
    }
}