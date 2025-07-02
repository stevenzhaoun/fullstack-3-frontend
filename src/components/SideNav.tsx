import { ListItem } from "@mui/material";
import { List } from "@mui/material";
import { Drawer } from "@mui/material";
import { Toolbar } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Link } from "react-router";

const drawerWidth = 240

const links = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Users', path: '/users' },
    { label: 'Roles', path: '/roles' },
    { label: 'Products', path: '/products' },
    { label: 'Orders', path: '/orders' },
]

export default function SideNav() {
    return <Drawer
        variant="permanent"
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
    >
        <Toolbar />
        <List>
            {links.map((link) => (
                <Link key={link.path} to={link.path}>
                    <ListItem  disablePadding>
                        <ListItemButton>
                            <ListItemText primary={link.label} />
                        </ListItemButton>
                    </ListItem>
                </Link>
            ))}
        </List>
    </Drawer>
}