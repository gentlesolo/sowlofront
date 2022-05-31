import {Grid, makeStyles} from "@material-ui/core";
// import Leftbar from "../Leftbar";
// import Feed from "../home/Feed";
// import Rightbar from "../Rightbar";
// import Add from "../Add";
// import Footer from "../Footer";
import SocialmediaFeed from "./SocialmediaFeed";
import {Alert, AlertTitle} from "@mui/material";
import React from "react";
import MiniDrawer from "./MiniDrawer";


const useStyles = makeStyles((theme) => ({
    right: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
}));

const Socialmedia = () => {
    const classes = useStyles();
    return (

        // <Router>
        <div>
            <Grid container>
                <Grid item sm={3} xs={0}>
                    {/*<Leftbar/>*/}
                    <MiniDrawer/>
                </Grid>
                <Grid item sm={8} xs={12} sx={{backgroundColor: "#fff7ff"}}>
                    <SocialmediaFeed/>
                </Grid>

            </Grid>

            {/*<Add/>*/}
            {/*<Footer/>*/}
        </div>


    );
}

export default Socialmedia;