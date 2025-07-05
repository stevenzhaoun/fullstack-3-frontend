import { login as loginApi } from "../api/users.api"
import { useContext } from "react"
import UserContext from "../context/userContext"
import client from "../api/client"

export default function useUser() {
    const { userData, setUserData } = useContext(UserContext)

    const login = async (email: string, password: string) => {
        const data = await loginApi(email, password)
        const userState = {
            id: data.id,
            name: data.name,
            email: data.email,
            token: data.token
        }

        setUserState(userState)
        
    }

    const setUserState = (userState: any) => {
        client.defaults.headers.common['Authorization'] = `Bearer ${userState.token}`
        setUserData(userState)
        localStorage.setItem('userState', JSON.stringify(userState))
    }

    const logout = () => {
        localStorage.removeItem('userState')
        setUserData(null)
    }


    return {
        login: login,
        setUserState: setUserState,
        userData: userData,
        logout: logout
    }
}