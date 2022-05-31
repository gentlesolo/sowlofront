import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../api/axios';
import { Link } from "react-router-dom";
import {Grid, Box, Typography, TextField, Stack, Button, Checkbox} from '@mui/material';
import BackgroundPicture from '../assets/images/Girl in a phone magnetises likes and coins.png';
import { useFormik } from 'formik';
import {makeStyles} from "@mui/styles";

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

const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/api/register';

function Register() {
    const classes = useStyles()
    const btn = {
        width: '620px',
        height: '60px',
        background: '#00FF84',
        color: '#000'
    };
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(EMAIL_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = EMAIL_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ email:user, password:pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    // withCredentials: true
                }
            );
            // TODO: remove console.logs before deployment
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            setUser('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }
    return (

        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="/login">Sign In</a>
                    </p>
                </section>
            ) : (

        <Grid columns={12} container spacing={2} className={classes.logincontainer}>
            <Grid item xs={12} md={4} className={classes.leftside}>
                <img className={classes.loginimage}
                     src={BackgroundPicture} alt="backgroundPicture" />
            </Grid>
            <Grid item xs={12} md={8} className={classes.rightside}>
                <Grid item className={classes.formbox}>
                    <Box container>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
                           aria-live="assertive">{errMsg}</p>
                        <Typography fontWeight="700" fontSize="30px"
                                    color="#140342" marginBottom="10px">
                            Sign Up
                        </Typography>
                        <Typography
                            fontWeight="400"
                            fontSize="15px"
                            marginBottom="30px"
                            lineHeight="26px"
                            color="#4F547B"
                            width="410px"
                        >
                            Already have an account? Log in
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Box
                                container

                            >
                                <Grid item lg={12}>
                                    <Stack container>
                                        <Typography
                                            color="#140342"
                                            marginBottom="10px"
                                            fontWeight="700"
                                            fontSize="16px"
                                            lineHeight="18px"
                                        >
                                            Email-Address
                                        </Typography>
                                        <TextField
                                            type="email"
                                            id="email"
                                            ref={userRef}
                                            autoComplete="off"
                                            onChange={(e) => setUser(e.target.value)}
                                            value={user}
                                            required
                                            aria-invalid={validName ? "false" : "true"}
                                            aria-describedby="uidnote"
                                            onFocus={() => setUserFocus(true)}
                                            onBlur={() => setUserFocus(false)}
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
                                            type="password"
                                            id="password"
                                            onChange={(e) => setPwd(e.target.value)}
                                            value={pwd}
                                            required
                                            aria-invalid={validPwd ? "false" : "true"}
                                            aria-describedby="pwdnote"
                                            onFocus={() => setPwdFocus(true)}
                                            onBlur={() => setPwdFocus(false)}
                                        />
                                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            8 to 24 characters.<br />
                                            Must include uppercase and lowercase letters, a number and a special character.<br />
                                            Allowed special characters:
                                            <span aria-label="exclamation mark">!</span>
                                            <span aria-label="at symbol">@</span>
                                            <span aria-label="hashtag">#</span>
                                            <span aria-label="dollar sign">$</span>
                                            <span aria-label="percent">%</span>
                                        </p>
                                    </Stack>
                                </Grid>
                                <Grid item lg={12}>
                                    <Stack container>
                                        <Typography
                                            color="#140342"
                                            marginTop="20px"
                                            marginBottom="10px"
                                            fontWeight="700"
                                            fontSize="16px"
                                            lineHeight="18px"
                                        >
                                            Firstname
                                        </Typography>
                                        <TextField
                                            id="username"
                                            type="name"
                                            autoComplete="current-password"
                                            marginBottom="30px"
                                            // onChange={}
                                            // value={}
                                        />
                                        <Typography
                                            color="#140342"
                                            marginTop="20px"
                                            marginBottom="10px"
                                            fontWeight="700"
                                            fontSize="16px"
                                            lineHeight="18px"
                                        >
                                            Confirm Password
                                        </Typography>
                                        <TextField
                                            type="password"
                                            id="confirm_pwd"
                                            onChange={(e) => setMatchPwd(e.target.value)}
                                            value={matchPwd}
                                            required
                                            aria-invalid={validMatch ? "false" : "true"}
                                            aria-describedby="confirmnote"
                                            onFocus={() => setMatchFocus(true)}
                                            onBlur={() => setMatchFocus(false)}
                                        />
                                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            Must match the first password input field.
                                        </p>
                                    </Stack>
                                </Grid>
                            </Box>
                            <Button disabled={!validName || !validPwd || !validMatch ? true : false} marginTop="20px" size="large" variant="contained" type="submit" >
                                Register
                            </Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Grid>

            )}
        </>



    // <Grid container lg={12} height="100vh" width="100vw">
    //         <Grid item lg={5} backgroundColor="#140342">
    //             <Grid container justifyContent="center" alignItems="center">
    //                 <img src={BackgroundPicture} alt="backgroundPicture" />
    //             </Grid>
    //         </Grid>
    //         <Grid item lg={7}>
    //             <Grid container lg={12} padding={8} height="100vh" width="100vw" backgroundColor="#FEFBF4">
    //                 <Grid item>
    //                     <Box height="500px" width="720px" backgroundColor="#FFF" padding={5} justifyContent="center" alignItems="center">
    //                         <Typography fontWeight="700" fontSize="30px" marginBottom="10px">
    //                             Sign Up
    //                         </Typography>
    //                         <Typography
    //                             fontWeight="400"
    //                             fontSize="15px"
    //                             marginBottom="30px"
    //                             lineHeight="26px"
    //                             color="#4F547B"
    //                             width="410px"
    //                         >
    //                             Already have an account? Log in
    //                         </Typography>
    //                         <form style={form} onSubmit={formik.handleSubmit}>
    //                             <Box
    //                                 container
    //                                 width="620px"
    //                                 height="301px"
    //                                 lg={12}
    //                                 display="flex"
    //                                 justifyContent="center"
    //                                 alignItems="center"
    //                             >
    //                                 <Grid item lg={6}>
    //                                     <Stack container marginRight="30px">
    //                                         <Typography
    //                                             color="#140342"
    //                                             marginBottom="10px"
    //                                             fontWeight="700"
    //                                             fontSize="16px"
    //                                             lineHeight="18px"
    //                                         >
    //                                             Email-Address
    //                                         </Typography>
    //                                         <TextField
    //                                             id="email"
    //                                             type="email"
    //                                             autoComplete="current-password"
    //                                             marginBottom="30px"
    //                                             onChange={formik.handleChange}
    //                                             value={formik.values.email}
    //                                         />
    //                                         <Typography
    //                                             color="#140342"
    //                                             marginBottom="10px"
    //                                             marginTop="20px"
    //                                             fontWeight="700"
    //                                             fontSize="16px"
    //                                             lineHeight="18px"
    //                                         >
    //                                             Password
    //                                         </Typography>
    //                                         <TextField
    //                                             id="password"
    //                                             type="password"
    //                                             autoComplete="current-password"
    //                                             marginBottom="30px"
    //                                             onChange={formik.handleChange}
    //                                             value={formik.values.password}
    //                                         />
    //                                     </Stack>
    //                                 </Grid>
    //                                 <Grid item lg={6}>
    //                                     <Stack container>
    //                                         <Typography
    //                                             color="#140342"
    //                                             marginBottom="10px"
    //                                             fontWeight="700"
    //                                             fontSize="16px"
    //                                             lineHeight="18px"
    //                                         >
    //                                             Username
    //                                         </Typography>
    //                                         <TextField
    //                                             id="username"
    //                                             type="name"
    //                                             autoComplete="current-password"
    //                                             onChange={formik.handleChange}
    //                                             value={formik.values.username}
    //                                         />
    //                                         <Typography
    //                                             color="#140342"
    //                                             marginTop="20px"
    //                                             marginBottom="10px"
    //                                             fontWeight="700"
    //                                             fontSize="16px"
    //                                             lineHeight="18px"
    //                                         >
    //                                             Confirm Password
    //                                         </Typography>
    //                                         <TextField
    //                                             id="confirmPassword"
    //                                             type="password"
    //                                             autoComplete="current-password"
    //                                             onChange={formik.handleChange}
    //                                             value={formik.values.confirmPassword}
    //                                         />
    //                                     </Stack>
    //                                 </Grid>
    //                             </Box>
    //                             <Button variant="contained" type="submit" style={btn}>
    //                                 Register
    //                             </Button>
    //                         </form>
    //                     </Box>
    //                 </Grid>
    //             </Grid>
    //         </Grid>
    //     </Grid>
    );
}

export default Register;
