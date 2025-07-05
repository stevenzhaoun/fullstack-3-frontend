import { createContext } from "react"

const UserContext = createContext({
    user: null,
    setUserData: null
} as any)

export default UserContext