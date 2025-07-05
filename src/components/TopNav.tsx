import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { Box, Menu, MenuItem } from '@mui/material';
import { useContext, useState } from 'react';
import UserContext from '../context/userContext';
import useUser from '../hooks/useUser';

export default function TopNav() {
    const {userData} = useContext(UserContext)
    const {logout} = useUser()

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLogout = () => {
        setAnchorEl(null);
        logout()
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return <AppBar component="nav" position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">Business Management System</Typography>
          <Box >
            <Typography onClick={handleMenu}>{userData?.name}</Typography>

            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
          </Box>
        </Toolbar>
      </AppBar>
}