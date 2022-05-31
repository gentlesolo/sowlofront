// import { makeStyles } from '@mui/styles';
import {
    Avatar,
    Box,
    Button, Card,
    CardActionArea, CardActions, CardContent,
    CardMedia,
    Grid,
    IconButton, ImageList, ImageListItem, ImageListItemBar,
    InputBase, ListSubheader,
    makeStyles, Tab,
    Typography
} from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
// import img from "../../assets/images/Girl in a phone magnetises likes and coins.svg"
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import React from "react";
import {Image, TextsmsSharp, Timer} from "@mui/icons-material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import img from "../../assets/images/consultant.jpg"
// import styled from "@emotion/styled";
// import {Home} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        height: "500px",
        color: "white",
        padding: "10% 15%",
        backgroundColor: "#EEF1FC",
        // backgroundColor: theme.palette.primary.main,
        //position: "sticky",
        top: 0,
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "#EEF1FC",
            color: "#555",
            border: "1px solid #ece7e7",
        },
    },
    rightsection: {
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing(0),
        justifyContent: "center",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(0),
            marginTop: theme.spacing(-5),
            backgroundColor: "#EEF1FC",
            fontSize: "17px",
            width: "100%",
            // height: "45px",
            alignItems: "center",
            padding: "15px",
            // fontWeight: "bolder",

        },
    },
    leftsection: {
        // display: "flex",
        alignItems: "center",
        marginTop: theme.spacing(0),
        justifyContent: "center",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            backgroundColor: "#EEF1FC",
            color: "#555",
            // border: "1px solid #ece7e7",
            padding: "15px",
            width: "100%",
            marginTop: theme.spacing(10),
        },
    },
    campaignleftsection: {
        // paddingLeft: "277px",
        //paddingTop: "266px",
        alignItems: "center",
        marginTop: theme.spacing(0),
        // alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#140342",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            backgroundColor: "#EEF1FC",
            color: "#555",
            // border: "1px solid #ece7e7",
            padding: "15px",
            width: "100%",
            marginTop: theme.spacing(10),
        },
    },

    campaignrightsection: {
        paddingLeft: "1.71px",
        paddingRight: "10px",
        alignItems: "center",
        marginTop: theme.spacing(0),
        // position: "absolute",
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(0),
            marginTop: theme.spacing(-5),
            backgroundColor: "#EEF1FC",
            fontSize: "17px",
            width: "100%",
            // height: "45px",
            alignItems: "center",
            padding: "15px",
            // fontWeight: "bolder",

        },
    },

    headtext: {
        textAlign: "left",
        width: "100%",
        fontWeight: "500",
        fontSize: "30px",
        lineHeight: "35px",
        textTransform: "capitalize",
        fontFamily: "Ubuntu",
        color: "#202020",
        verticalAlign: "middle",
        [theme.breakpoints.down("sm")]: {
            fontSize: "30px",
            lineHeight: "40px",
            textAlign: "left",
            fontWeight: "bolder",
        },
    },
    subtitle: {
        textAlign: "left",
        width: "80%",
        marginBottom: theme.spacing(1),
        fontSize: "14px",
        lineHeight: "25px",
        fontWeight: "300",
        fontFamily: "Sora",
        verticalAlign: "middle",
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px",
            lineHeight: "26px",
            textAlign: "left",
            width: "100%",
            // fontWeight: "bolder",

        },
    },
    subtrending: {
        color: '#140342',
        fontWeight: '200',
        fontSize: "15px",
        textAlign: "left",
        marginTop: theme.spacing('8'),
        [theme.breakpoints.down("sm")]: {
            fontSize: "10px",
            marginTop: theme.spacing('4'),
            //margin: '10px 0',

        },
    },
    btn: {
        borderRadius: "5px",
        backgroundColor: "#6440FB",
        color: "white",
        width: "30%",
        height: "8%",
        fontWeight: "bold",
        fontSize: "16px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "17px",
            width: "100%",
            height: "45px",
            alignItems: "center",
            aligncenter: "center",
            // fontWeight: "bolder",

        },
    },
    image: {
        width: "90%",
        [theme.breakpoints.down("sm")]: {
            width: "95%",
            //padding: "-35px",

        },
    },
    cardy: {
        marginTop: "-350px",
        width: "60%",
        float: "right",
        // position: "fixed",
        marginBottom: theme.spacing(2),
    },
    media: {
        height: '150px',
        display: "none",
        [theme.breakpoints.up("sm")]: {
            height: '150',
        },
    },
    campaigndetails: {
        // paddingLeft: "277px",
        //paddingTop: "266px",
        alignItems: "center",
        padding: "0% 15%",
        marginTop: theme.spacing(1),
        // alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#140342",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            backgroundColor: "#EEF1FC",
            color: "#555",
            // border: "1px solid #ece7e7",
            padding: "15px",
            width: "100%",
            marginTop: theme.spacing(10),
        },
    },



}));

function CampaignSingleFeed() {
    const classes = useStyles();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            author: '@bkristastucchio',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
            author: '@rollelflex_graphy726',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
            author: '@helloimnik',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            author: '@nolanissac',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            author: '@hjrc33',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
            author: '@tjdragotta',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
            author: '@katie_wasserman',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            author: '@silverdalex',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            author: '@shelleypauls',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            author: '@peterlaster',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            author: '@southside_customs',
            cols: 2,
        },
    ];

    return (

        <div>
            <Grid container className={classes.container}>
                <Grid item sm={7} xs={12} className={classes.leftsection}>
                    <Typography
                        variant="h2"
                        component="h2"
                        gutterBottom
                        className={classes.headtext}>
                        The Smartest Social Media
                        Management Platform For Small Business Owners
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        className={classes.subtitle}
                        gutterBottom component="div">
                        For Busy Small Business Owners
                        Who Needs Awareness & Wants To Post Everyday,
                        Sowlo is the Social Media Tool That Helps You Post Quality Contents Everyday.
                    </Typography>

                </Grid>
                <Grid item sm={5} xs={12} alignItems="center" className={classes.rightsection}>

                </Grid>
            </Grid>

            <Grid container className={classes.campaigndetails}>
                <Grid item sm={7} xs={12} className={classes.campaignleftsection}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Overview" value="1" />
                                    <Tab label="Campaign Content" value="2" />
                                    <Tab label="Reviews" value="3" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Typography variant="h5"
                                            component="h5"
                                            gutterBottom>Description</Typography>
                                <Typography>
                                    For Busy Small Business Owners Who Needs Awareness & Wants To Post Everyday,
                                    Sowlo is the Social Media Tool That Helps You Post Quality Contents Everyday.
                                    For Busy Small Business Owners Who Needs Awareness & Wants To Post Everyday,
                                    Sowlo is the Social Media Tool That Helps You Post Quality Contents Everyday.
                                    For Busy Small Business Owners Who Needs Awareness & Wants To Post Everyday,
                                    Sowlo is the Social Media Tool That Helps You Post Quality Contents Everyday.
                                    For Busy Small Business Owners Who Needs Awareness & Wants To Post Everyday,
                                    Sowlo is the Social Media Tool That Helps You Post Quality Contents Everyday.
                                </Typography>
                            </TabPanel>
                            <TabPanel value="2">
                                <ImageList sx={{ width: 500, height: 450 }}>
                                    <ImageListItem key="Subheader" cols={2}>
                                        <ListSubheader component="div">December</ListSubheader>
                                    </ImageListItem>
                                    {itemData.map((item) => (
                                        <ImageListItem key={item.img}>
                                            <img
                                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                            <ImageListItemBar
                                                title={item.title}
                                                subtitle={item.author}
                                                actionIcon={
                                                    <IconButton
                                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                        aria-label={`info about ${item.title}`}
                                                    >
                                                        {/*<InfoIcon />*/}
                                                    </IconButton>
                                                }
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </TabPanel>
                            <TabPanel value="3">Item Three</TabPanel>
                        </TabContext>
                    </Box>
                </Grid>
                <Grid item sm={5} xs={12} alignItems="center" className={classes.campaignrightsection}>
                    <Card className={classes.cardy}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                style={{height: '250px'}}
                                alt="green iguana"
                                // height="140"
                                //src={category.icon}
                                image={img}
                                className={classes.icon}
                                loading="lazy"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" className={classes.camphead}>
                                    {/*{category.name.substr(0, 50) + '...'}*/}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={classes.campsub}>
                                    {/*{category.content}*/}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Timer sx={{ fontSize: 16 }}/>
                            <Button className={classes.days} >30 Days</Button>
                            <TextsmsSharp sx={{ fontSize: 16 }}/>
                            <Button className={classes.days}>24 contents</Button>
                        </CardActions>
                        <div style={{borderTop: '0.5px solid #bfbfbf', width: '80%', alignItems: 'center', margin: '0 auto'}}></div>
                        <CardActions >
                            {/*<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className={classes.avatar} />*/}
                            <Button className={classes.avatartext}>Solomon Archibong</Button>
                            <Typography align="right" className={classes.amount}>₦ 15,000</Typography>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

        </div>

    );
}

export default CampaignSingleFeed;
