import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Calendar from "./Calendar";
//import MenuBar from "../navbar/MenuBar";
import {Link} from "@material-ui/core";
import {AutoAwesomeMosaic, NoteAddOutlined} from "@mui/icons-material";
//import SocialmediaFeed from "./SocialmediaFeed";
import {makeStyles} from "@mui/styles";
// import HomePage from "./HomePage";
import Campaign from "./Campaign";
import CampaignSingleFeed from "./CampaignSingleFeed";

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
    appbar: {
        backgroundColor: "#ffffff !important",
        [theme.breakpoints.down("sm")]: {
            // height: "70%",
            backgroundColor: "#140342 !important",
            // paddingLeft: "50px",
        },
    },
    menuicon: {
        color: "#160647",
        [theme.breakpoints.down("sm")]: {
            // height: "70%",
            color: "#ffffff !important",
            // paddingLeft: "50px",
        },
    },
    mainnavbar: {
        [theme.breakpoints.down("sm")]:{
            display: "none",
            visibility: "hidden"
        }
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

const drawerWidth = 240;
const mainbodyWidth = 0;

function CampaignSingle(props) {
    const classes = useStyles()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/social-media">
                        <ListItemIcon>
                            {/*<DraftsIcon />*/}
                            <NoteAddOutlined/>
                        </ListItemIcon>
                        <ListItemText primary="Contents" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/campaign">
                        <ListItemIcon>
                            {/*<DraftsIcon />*/}
                            <AutoAwesomeMosaic/>
                        </ListItemIcon>
                        <ListItemText primary="Campaigns" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/create-campaign">
                        <ListItemIcon>
                            {/*<DraftsIcon />*/}
                        </ListItemIcon>
                        <ListItemText primary="Create Campaign" />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar className={classes.appbar}
                    position="fixed"
                    sx={{
                        // width: { sm: `calc(100% - ${drawerWidth}px)` },
                        // ml: { sm: `${drawerWidth}px` },
                    }}
            >
                <Toolbar>
                    <IconButton
                        className={classes.menuicon}
                        // color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Sowlo
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} className={classes.mainnavbar}>
                        <Link href="/" underline="none">
                            <Typography sx={{ minWidth: 100 }}>Home</Typography>
                        </Link>
                        <Link href="/social-media" underline="none">
                            <Typography sx={{ minWidth: 100 }}>Contents</Typography>
                        </Link>
                        <Link href="/campaign" underline="none">
                            <Typography sx={{ minWidth: 100 }}>Campaign</Typography>
                        </Link>

                        {/*<MenuBar/>*/}
                    </Box>

                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: mainbodyWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 0 },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                {/*<SocialmediaFeed/>*/}
                <CampaignSingleFeed/>

            </Box>
        </Box>
    );
}

// CampaignSingle.propTypes = {
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };

export default CampaignSingle;
