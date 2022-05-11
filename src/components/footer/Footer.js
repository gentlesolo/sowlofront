import {Typography, Grid, Divider, IconButton} from '@mui/material'
import React from 'react'
import amazon from '../../assets/icon/Group(1).png'
import cisco from '../../assets/icon/Group(2).png'
import amd from '../../assets/icon/amd-logo-1-2.png'
import dropcam from '../../assets/icon/dropcam.png'
import logitech from '../../assets/icon/logitech-2-1-3-1.png'
import spotify from '../../assets/icon/Spotify-2-2.png'
import {makeStyles} from '@mui/styles'
import {Box, Card, CardContent, InputBase} from "@material-ui/core";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import img from "../../assets/images/Group39.svg";


const useStyles = makeStyles((theme) =>({
    catcontainer: {
        width: "100%",
        //height: "200px",
        color: "white",
        //paddingTop: theme.spacing(10),
        backgroundColor: "#FFFFFF",
        // backgroundColor: theme.palette.primary.main,
        //position: "sticky",
        top: 0,
        borderBottom: "1px solid #ece7e7",
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "#FFFFFF",
            color: "#555",
            //border: "1px solid #ece7e7",
        },
    },
    compcontainer: {
        marginTop: "10px",
        [theme.breakpoints.down("sm")]: {
            marginTop: "5px",
            //border: "1px solid #ece7e7",
        },
    },
    catleftsection: {
        //paddingLeft: "177px",
        padding: "1% 0",
        //alignItems: "center",
        //marginTop: theme.spacing(29),
        [theme.breakpoints.down("sm")]: {
            backgroundColor: "#FFFFFF",
            color: "#555",
            padding: "5px",
            width: "100%",
            //marginTop: theme.spacing(30),
        },
    },
    // companyicon: {
    //     margin: '70px',
    //     top: '20px',
    //     [theme.breakpoints.down("sm")]: {
    //         margin: '20px',
    //         //marginTop: theme.spacing(30),
    //     },
    // }
}))

const Footer = () => {
    const classes = useStyles()



    return (


        <div>
            <Grid container className={classes.catcontainer}>

                <Grid item sm={12} xs={12} className={classes.catleftsection}>
                    <Typography variant="h6" noWrap component="div" sx={{color: '#1A3454'}}>
                        Copyright All Right Reserved
                    </Typography>
                    {/*<Grid className={classes.compcontainer}>*/}
                    {/*    */}
                    {/*</Grid>*/}

                </Grid>

            </Grid>
        </div>
    )
}

export default Footer