import React from 'react';
import { Grid, Box, Typography, Link, TextField, Stack, Button, Checkbox } from '@mui/material';
import BackgroundPicture from '../assets/images/Girl in a phone magnetises likes and coins.png';
import { useFormik } from 'formik';
import { useRef, useEffect, useState } from "react";

function Login() {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const btn = {
        width: '600px',
        height: '60px',
        background: '#00FF84',
        color: '#000'
    };
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const form = {
        background: '#FFFFFF'
    };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <Grid container lg={12} height="100vh" width="100vw">
            <Grid item lg={5} backgroundColor="#140342">
                <Grid container justifyContent="center" alignItems="center">
                    <img style={{width: '20%',}} src={BackgroundPicture} alt="backgroundPicture" />
                </Grid>
            </Grid>
            <Grid item lg={7}>
                <Grid
                    container
                    lg={12}
                    padding={8}
                    height="100vh"
                    width="100vw"
                    backgroundColor="#FEFBF4"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item>
                        <Box
                            container
                            lg={12}
                            height="500px"
                            width="600px"
                            backgroundColor="#FFF"
                            padding={5}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Typography fontWeight="700" fontSize="30px" marginBottom="10px">
                                Log in
                            </Typography>
                            <Typography
                                fontWeight="400"
                                fontSize="15px"
                                marginBottom="30px"
                                lineHeight="26px"
                                color="#4F547B"
                                width="410px"
                            >
                                Dont have an account yet? Sign up
                            </Typography>
                            <form style={form} onSubmit={formik.handleSubmit}>
                                <Box container width="620px" height="301px" lg={12} display="flex">
                                    <Grid item lg={12}>
                                        <Stack container marginRight="30px">
                                            <Typography
                                                color="#140342"
                                                marginBottom="10px"
                                                fontWeight="700"
                                                fontSize="16px"
                                                lineHeight="18px"
                                            >
                                                Username or Email
                                            </Typography>
                                            <TextField
                                                id="email"
                                                type="email"
                                                autoComplete="current-password"
                                                marginBottom="30px"
                                                onChange={formik.handleChange}
                                                value={formik.values.email}
                                            />
                                            <Typography
                                                color="#140342"
                                                marginBottom="10px"
                                                marginTop="20px"
                                                fontWeight="700"
                                                fontSize="16px"
                                                lineHeight="18px"
                                            >
                                                Password
                                            </Typography>
                                            <TextField
                                                id="password"
                                                type="password"
                                                autoComplete="current-password"
                                                marginBottom="30px"
                                                onChange={formik.handleChange}
                                                value={formik.values.password}
                                            />
                                        </Stack>
                                        <Grid display="flex" marginTop="10px" justifyContent="space-between">
                                            <Box display="flex">
                                                <Checkbox {...label} />
                                                <Typography marginTop="10px">Remember me</Typography>
                                            </Box>
                                            <Box>
                                                <Link marginTop="10px" marginRight="30px">
                                                    Forgot your password?
                                                </Link>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Button variant="contained" type="submit" style={btn}>
                                    Login
                                </Button>
                            </form>
                            <Grid marginTop="10px" marginLeft="44%">
                                <Typography>Or sign in using</Typography>
                            </Grid>
                            <Grid justifyContent="space-between" display="flex">
                                <Button variant="outlined" type="submit">
                                    Log in via Facebook
                                </Button>
                                <Button variant="outlined" type="submit">
                                    Log in via Google
                                </Button>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Login;
