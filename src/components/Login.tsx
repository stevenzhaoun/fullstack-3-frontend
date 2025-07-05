import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import useUser from "../hooks/useUser"
import { useNavigate } from "react-router"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useUser()
    const navigate = useNavigate()

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await login(email, password)
        navigate('/dashboard')
    }
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
            <Box component="form" width={400} p={4} display='flex' flexDirection="column" gap={5} onSubmit={handleSubmit} >
                <Typography variant="h4" textAlign="center">Welcome</Typography>
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit" fullWidth variant="contained">Login</Button>
            </Box>

        </Box>
    )
}