import { Box, Toolbar, Typography } from '@mui/material'
import { Outlet } from 'react-router'

export default function MainContainer() {
    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Box><Outlet /></Box>
            
        </Box>
    )
}