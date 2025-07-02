import { Box, CircularProgress, InputLabel, FormControl, MenuItem, Select, TextField, Typography, type SelectChangeEvent, Button, } from "@mui/material";
import { useState, useEffect } from "react";
import { listRoles } from "../../api/roles.api";
import { createUser, getUser, updateUser } from "../../api/users.api";
import { useNavigate, useParams } from "react-router";
import Snackbar, { type SnackbarOrigin } from '@mui/material/Snackbar';
import useDataLoad from "../../hooks/useDataLoad";

interface State extends SnackbarOrigin {
    open: boolean;
}


const defaultPassword = '123456'


export default function CreateOrUpdateUser() {
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()
    const params = useParams()
    const [snackbarState, setSnackbarState] = useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const {data: roles, isLoading: isRolesLoading} = useDataLoad(listRoles)

    const { vertical, horizontal, open } = snackbarState;

    const isAdd = params.userId === 'add'

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: defaultPassword,
        role_id: undefined,
    } as {
        name: string,
        email: string,
        password?: string,
        role_id?: number
    })

    const handleSnackbarClose = () => {
        setSnackbarState({ ...snackbarState, open: false });
    };

    const openSnackbar = () => {
        setSnackbarState({ ...snackbarState, open: true });
    }

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            if (!isAdd) {
                const user = await getUser(params.userId as string)
                setUser({
                    name: user.name,
                    email: user.email,
                    role_id: user.role_id,
                })
            }
            setIsLoading(false)
        }
        fetchData()
    }, [])

    const handleChange = (fieldName: string) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setUser({
                ...user,
                [fieldName]: e.target.value
            })
        }
    }

    const handleSelectChange = (e: SelectChangeEvent<number>) => {
        setUser({
            ...user,
            role_id: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(user)
        setIsSubmitting(true)
        if (isAdd) {
            await createUser(user)
            setIsSubmitting(false)
            navigate('/users')
        } else {
            await updateUser(params.userId as string, user)
            setIsSubmitting(false)
        }
        openSnackbar()

    }

    if (isLoading || isRolesLoading) {
        return <CircularProgress />
    }

    return <div>
        <Typography variant="h4">{isAdd ? 'Add' : 'Edit'} User</Typography>
        <Box component="form" display='flex' flexDirection='column' gap={2} width={500} onSubmit={handleSubmit}>
            <TextField type="text" label="Name" value={user.name} onChange={handleChange('name')} required />
            <TextField type="email" label="Email" value={user.email} onChange={handleChange('email')} required />
            {isAdd && <TextField type="password" label="Password" value={user.password} onChange={handleChange('password')} required />}

            <FormControl fullWidth>
                <InputLabel id="role-select-label">Role</InputLabel>
                <Select
                    labelId="role-select-label"
                    id="role-select"
                    value={user.role_id}
                    label="Role"
                    onChange={handleSelectChange}
                    required
                >
                    {(roles || []).map(role => {
                        return <MenuItem key={role.id} value={role.id}>{role.name}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <Button variant="outlined" color="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? <CircularProgress /> : isAdd ? 'Create' : 'Update'}
            </Button>
        </Box>
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleSnackbarClose}
            message="Submitted successfully"
            key={vertical + horizontal}
        />
    </div>
}