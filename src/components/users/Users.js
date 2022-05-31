import { useState, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

import {Grid, Typography} from "@material-ui/core";
import jwtDecode from "jwt-decode";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const Users = () => {
    const { auth } = useAuth();
    const [ users, setUsers ] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axios.get('/api/users', {
                    headers: { "Authorization": `Bearer ${auth?.accessToken}`, 'Content-Type': 'application/json'},
                    // headers: { 'Content-Type': 'application/json' }
                    //signal: controller.signal
                });
                console.log(response.data);
                isMounted && setUsers(response.data);
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }
        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    return (
        <Grid>
            <Typography>
                Users List
            </Typography>
            {users?.length
                ? (
                    <ul>
                        {users.map((user, i) => <li key={i}>{user?.firstName}</li>)}
                    </ul>
                ) : <Typography>No users to display</Typography>

            }

        </Grid>
    );
};

export default Users;