import { Box, Button, CircularProgress, Typography } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from "react"; // React Hooks
import type { Permission, Role, User } from "../../types";
import { useNavigate } from "react-router";
import { listRoles } from "../../api/roles.api";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        flex: 1,
    },
    {
        field: 'permissions',
        headerName: 'Permissions',
        flex: 1,
        valueGetter: (permissions: Permission[]) => permissions.map((permission) => permission.name).join(', '),
    }
];

export default function ListRoles() {
    const [roles, setRoles] = useState<Role[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const roles = await listRoles()
            setRoles(roles)
            setIsLoading(false)
        }
        fetchData()
    }, [])

    const handleAddRole = () => {
        // navigate('/roles/add')
    }

    if(isLoading) {
        return <CircularProgress />
    }

    return <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h4">Roles</Typography>
            <Button variant="contained" color="primary" onClick={handleAddRole}>Add Role</Button>
        </Box>
        <DataGrid
            rows={roles}
            columns={columns}
            disableRowSelectionOnClick
            onRowClick={(row) => {
                navigate(`/roles/${row.id}`)
            }}
        />
    </Box>
}