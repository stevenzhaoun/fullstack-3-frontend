import { Box, Button, CircularProgress, Typography } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from "react"; // React Hooks
import { listUsers } from "../../api/users.api";
import type { Role, User } from "../../types";
import { useNavigate } from "react-router";
import useDataLoad from "../../hooks/useDataLoad";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        flex: 1,
    },
    {
        field: 'email',
        headerName: 'Email',
        flex: 1,
    },
    {
        field: 'role',
        headerName: 'Role',
        flex: 1,
        valueGetter: (role: Role) => role.name,
    }
];

export default function ListUsers() {
    const navigate = useNavigate()
    const { data: users, isLoading } = useDataLoad(listUsers)

    const handleAddUser = () => {
        navigate('/users/add')
    }

    if(isLoading) {
        return <CircularProgress />
    }

    return <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h4">Users</Typography>
            <Button variant="contained" color="primary" onClick={handleAddUser}>Add User</Button>
        </Box>
        <DataGrid
            rows={users || []}
            columns={columns}
            disableRowSelectionOnClick
            
            onRowClick={(row) => {
                navigate(`/users/${row.id}`)
            }}
        />
    </Box>
}