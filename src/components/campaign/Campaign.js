import {Container, Grid, makeStyles} from "@material-ui/core";

import CampaignFeed from "./CampaignFeed";
import {Alert, AlertTitle, Stack} from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import Rightbar from "./Rightbar";


const useStyles = makeStyles((theme) => ({
    right: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    campcontainer: {
        // paddingLeft: theme.spacing(5),
        alignItems: "center",
        padding: "50px 5%",
        // backgroundColor: "#fff7ff",
    },
}));

const Campaign = () => {
    const classes = useStyles();
    return (

        // <Router>
        <div>
            <Container maxWidth={false} className={classes.campcontainer}>
                <Stack paddingTop='0px' direction="row" spacing={2} justifyContent="space-between">
                    <Sidebar />
                    <CampaignFeed/>
                    {/*<Rightbar/>*/}
                </Stack>
            </Container>
        </div>


    );
}

export default Campaign;
