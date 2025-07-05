import { useNavigate } from "react-router"
import UserContext from "../context/userContext"
import { useContext, useEffect } from "react"
import useUser from "./useUser"

const useInitialLoading = () => {
    const {userData, setUserState} = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if(userData) {
            return
        }
        const userString = localStorage.getItem('userState')
        if(userString) {
            const userData = JSON.parse(userString)
            setUserState(userData)
        } else {
            navigate('/login')
        }


    }, [userData])
}

export default useInitialLoading