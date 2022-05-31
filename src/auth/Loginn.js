import React, { useRef, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import jwt_decode from "jwt-decode";
// import jwtDecode, { JwtPayload } from "jwt-decode";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from '../api/axios';
import {Box, Button, Checkbox, Grid, Stack, TextField, Typography} from "@mui/material";
import BackgroundPicture from "../assets/images/Girl in a phone magnetises likes and coins.png";
import {makeStyles} from "@mui/styles";
import SocialLogin from "./SocialLogin";
import {useAuth0} from "@auth0/auth0-react";
const LOGIN_URL = '/api/login';
const jwtDecode = require('jwt-decode');

const useStyles = makeStyles((theme) =>({
    logincontainer: {
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: 'hidden',
        // width: '100%'
        padding: "30px 0",
        color: "white",
        // backgroundColor: "#000000",
        top: 0,
        borderBottom: "1px solid #ece7e7",
        [theme.breakpoints.down("sm")]: {
            height: "100vh",
            backgroundColor: "#FFFFFF",
            color: "#555",
        },
    },
    leftside: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#140342",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            height: "30%",
        },
    },
    rightside: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FEFBF4",
        // position: "relative",
        [theme.breakpoints.down("sm")]: {
            height: "70%",
            // paddingLeft: "50px",
        },
    },
    formbox: {
        padding: "50px",
        background: '#ffffff',
        alignItems: "center",
        //position: "absolute",
        // top: "20%",
        // left: "25%",
        width: '45%',
        verticalAlign: "middle",
        [theme.breakpoints.down("sm")]: {
            padding: "10px 10px",
            top: "2%",
            // left: "8%",
            //right: "1%",
            width: '90%',
        },
    },
    loginimage: {
        alignItems: "center",
        // position: "absolute",
        // top: "40%",
        // left: "25%",
        width: '70%',
        verticalAlign: "middle",
        [theme.breakpoints.down("sm")]: {
            top: "30%",
            left: "25%",
            width: '50%',
        },
    }
}))

const Loginn = () => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const classes = useStyles()
    const { setAuth, persist, setPersist } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email:user, password:pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    //withCredentials: true
                }
            );

            //console.log("nothing");
            console.log(JSON.stringify(response?.data));

            const decodedjwt = jwtDecode(response?.data?.access_token, { payload: true });
            console.log(decodedjwt);
            // console.log(decodedjwt.roles[0])
            // console.log("Token "+ response?.data?.access_token);
            const accessToken = response?.data?.access_token;
            const refreshToken = response?.data?.refresh_token;
            console.log("refresh_token " + response?.data?.refresh_token);
            console.log(accessToken);
            const roles = decodedjwt.roles;
            //console.log(roles);
            setAuth({ user, pwd, roles, refreshToken, accessToken });
            setUser('');
            setPwd('');
            navigate(from, { replace: true });
        } catch (err) {
            if(!err?.response){
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400){
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401){
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    const togglePersist = () => {
        setPersist(prev => !prev);
    }

    useEffect(() => {
        localStorage.setItem("persist", persist);
    }, [persist])

    return (

        <Grid columns={12} container spacing={2} className={classes.logincontainer}>
            <Grid item xs={12} md={4} className={classes.leftside}>
                <img className={classes.loginimage}
                     src={BackgroundPicture} alt="backgroundPicture" />
            </Grid>
            <Grid item xs={12} md={8} className={classes.rightside}>
                <Grid item className={classes.formbox}>
                    <Box
                        container
                    >

                        <Typography
                            ref={errRef}
                            className={errMsg ? "errmsg" : "offscreen"}
                            aria-live="assertive">
                            {errMsg}
                        </Typography>

                        <Typography fontWeight="700" fontSize="30px" color="#140342" marginBottom="10px">
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
                            Dont have an account yet? <a href="/register">Sign up</a>
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Box container>
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
                                            ref={userRef}
                                            autoComplete="current-password"
                                            marginBottom="30px"
                                            onChange={(e) => setUser(e.target.value)}
                                            value={user}
                                            required
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
                                            onChange={(e) => setPwd(e.target.value)}
                                            value={pwd}
                                            required
                                        />
                                    </Stack>
                                    <Grid display="flex" marginTop="10px" justifyContent="space-between">
                                        <Box display="flex">
                                            <Checkbox onChange={togglePersist}
                                                      checked={persist} />
                                            <input
                                                type="checkbox"
                                                id="persist"
                                                onChange={togglePersist}
                                                checked={persist}
                                            />
                                            <Typography marginTop="10px">Remember me</Typography>
                                        </Box>
                                        <Box>
                                            <Typography marginTop="10px">Forgot your password?</Typography>
                                            {/*<Link marginTop="10px" marginRight="30px">*/}
                                            {/*    Forgot your password?*/}
                                            {/*</Link>*/}
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Button variant="contained" type="submit" >
                                Login
                            </Button>
                        </form>
                        <Grid marginTop="10px" marginLeft="44%">
                            <Typography>Or sign in using</Typography>
                        </Grid>
                        !isAuthenticated && (
                        <button onClick={() => loginWithRedirect()}>
                            Sign In
                        </button>
                        )
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



                // <Grid container lg={12} height="100vh" width="100vw">
                //     <Grid item lg={5} position="relative" backgroundColor="#140342" verticalAlign="center"
                //           vertical-align="middle">
                //         <img style={{width: '20%', verticalAlign: "middle",
                //             display: 'flex', position: 'absolute',
                //             flexDirection: 'column',
                //             justifyContent: 'center',}}
                //              src={BackgroundPicture} alt="backgroundPicture" />
                //         {/*<Grid container justifyContent="center"*/}
                //         {/*      alignItems="center"*/}
                //         {/*      display="flex"*/}
                //         {/*      verticalAlign="center"*/}
                //         {/*      vertical-align="middle"*/}
                //         {/*      flex-direction="column">*/}
                //         {/*    <img style={{width: '70%', verticalAlign: "middle",*/}
                //         {/*        display: 'flex',*/}
                //         {/*        flexDirection: 'column',*/}
                //         {/*        justifyContent: 'center',}} */}
                //         {/*         src={BackgroundPicture} alt="backgroundPicture" />*/}
                //         {/*</Grid>*/}
                //     </Grid>
                //     <Grid item lg={7}>
                //         <Grid
                //             container
                //             lg={12}
                //             padding={8}
                //             height="100vh"
                //             width="100vw"
                //             backgroundColor="#FEFBF4"
                //             justifyContent="center"
                //             alignItems="center"
                //         >
                //             <Grid item>
                //                 <Box
                //                     container
                //                     lg={12}
                //                     height="500px"
                //                     width="600px"
                //                     backgroundColor="#FFF"
                //                     padding={5}
                //                     justifyContent="center"
                //                     alignItems="center"
                //                 >
                //
                //                     <Typography
                //                         ref={errRef}
                //                         className={errMsg ? "errmsg" : "offscreen"}
                //                         aria-live="assertive">
                //                         {errMsg}
                //                     </Typography>
                //
                //                     <Typography fontWeight="700" fontSize="30px" marginBottom="10px">
                //                         Log in
                //                     </Typography>
                //                     <Typography
                //                         fontWeight="400"
                //                         fontSize="15px"
                //                         marginBottom="30px"
                //                         lineHeight="26px"
                //                         color="#4F547B"
                //                         width="410px"
                //                     >
                //                         Dont have an account yet? Sign up
                //                     </Typography>
                //                     <form onSubmit={handleSubmit}>
                //                         <Box container width="620px" height="301px" lg={12} display="flex">
                //                             <Grid item lg={12}>
                //                                 <Stack container marginRight="30px">
                //                                     <Typography
                //                                         color="#140342"
                //                                         marginBottom="10px"
                //                                         fontWeight="700"
                //                                         fontSize="16px"
                //                                         lineHeight="18px"
                //                                     >
                //                                         Username or Email
                //                                     </Typography>
                //                                     <TextField
                //                                         id="email"
                //                                         type="email"
                //                                         ref={userRef}
                //                                         autoComplete="current-password"
                //                                         marginBottom="30px"
                //                                         onChange={(e) => setUser(e.target.value)}
                //                                         value={user}
                //                                         required
                //                                     />
                //                                     <Typography
                //                                         color="#140342"
                //                                         marginBottom="10px"
                //                                         marginTop="20px"
                //                                         fontWeight="700"
                //                                         fontSize="16px"
                //                                         lineHeight="18px"
                //                                     >
                //                                         Password
                //                                     </Typography>
                //                                     <TextField
                //                                         id="password"
                //                                         type="password"
                //                                         autoComplete="current-password"
                //                                         marginBottom="30px"
                //                                         onChange={(e) => setPwd(e.target.value)}
                //                                         value={pwd}
                //                                         required
                //                                     />
                //                                 </Stack>
                //                                 <Grid display="flex" marginTop="10px" justifyContent="space-between">
                //                                     <Box display="flex">
                //                                         <Checkbox onChange={togglePersist}
                //                                                   checked={persist} />
                //                                         <input
                //                                             type="checkbox"
                //                                             id="persist"
                //                                             onChange={togglePersist}
                //                                             checked={persist}
                //                                         />
                //                                         <Typography marginTop="10px">Remember me</Typography>
                //                                     </Box>
                //                                     <Box>
                //                                         <Typography marginTop="10px">Forgot your password?</Typography>
                //                                         {/*<Link marginTop="10px" marginRight="30px">*/}
                //                                         {/*    Forgot your password?*/}
                //                                         {/*</Link>*/}
                //                                     </Box>
                //                                 </Grid>
                //                             </Grid>
                //                         </Box>
                //                         <Button variant="contained" type="submit" >
                //                             Login
                //                         </Button>
                //                     </form>
                //                     <Grid marginTop="10px" marginLeft="44%">
                //                         <Typography>Or sign in using</Typography>
                //                     </Grid>
                //                     <Grid justifyContent="space-between" display="flex">
                //                         <Button variant="outlined" type="submit">
                //                             Log in via Facebook
                //                         </Button>
                //                         <Button variant="outlined" type="submit">
                //                             Log in via Google
                //                         </Button>
                //                     </Grid>
                //                 </Box>
                //             </Grid>
                //         </Grid>
                //     </Grid>
                // </Grid>

    )
}
export default Loginn