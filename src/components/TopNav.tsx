import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';

export default function TopNav() {
    return <AppBar component="nav" position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">Business Management System</Typography>
          <Box >
            <Typography>Steven</Typography>
          </Box>
        </Toolbar>
      </AppBar>
}