// import { makeStyles } from '@mui/styles';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Container, FormControl, Grid, InputLabel,
    makeStyles, MenuItem, Select,
    Typography
} from "@material-ui/core";
// import ListHeadlines from "./headline/ListHeadlines";
import {useEffect, useState} from "react";
//import HeadlineService from "./HeadlineService";
import * as React from "react";
import {IconButton, Pagination, Stack} from "@mui/material";
import Category from "./Category";
import fashion from "../../../assets/icon/fashion.png";
import gym from "../../../assets/icon/dumbbell.png";
import coach from "../../../assets/icon/coach.png";
import retail from "../../../assets/icon/shop.png";
import b2b from "../../../assets/icon/profit.png";
import realestate from "../../../assets/icon/real-estate.png";
import social from "../../../assets/icon/bullhorn.png";
import finance from "../../../assets/icon/budget.png";
// import FeedIcon from "@mui/icons-material/Feed";
// import NewspaperIcon from "@mui/icons-material/Newspaper";
// import NewReleasesIcon from "@mui/icons-material/NewReleases";
// import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
// import FeaturedVideoIcon from "@mui/icons-material/FeaturedVideo";
// import RadioIcon from "@mui/icons-material/Radio";
// import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
// import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
// import img from "../../../assets/images/Group39.svg";
//import ReactPaginate from "react-paginate";
// import { useAnalytics } from 'use-analytics'
// import * as analytics from "analytics";
//import googleAnalytics, {track} from "@analytics/google-analytics";
//import Analytics from "analytics";
// import analytics from "analytics";
// import {Home} from "@mui/icons-material";

// const myPlugin = {
//     name: 'my-custom-plugin',
//     page: ({payload}) => {
//         console.log('page view fired', payload)
//     },
//     track: ({payload}) => {
//         console.log('track event payload', payload)
//     }
// }
//
// const analytics = Analytics({
//     app: 'writa',
//     plugins: [
//         myPlugin,
//         googleAnalytics({
//             trackingId: 'UA-222078699-1'
//         })
//     ]
// })

const useStyles = makeStyles((theme) => ({
    categorycontainer: {
        marginTop: theme.spacing(2),
        paddingTop: theme.spacing(10),
        alignItems: "center",
        // backgroundColor: "#fff7ff",
    },
    box: {
        width: "100%",
        paddingBottom: 20,
        alignItems: "center"
    },
    stackrow: {
        marginBottom: theme.spacing(5),
        marginTop: theme.spacing(5),
    },
    post: {
        outline: "0 solid transparent",
        fontFamily: "Sora",
    },
    button: {
        color: "#160647",
        fontSize: 11,
        size: 'small',
    },
    pageLinkClassName: {
        color: "#160647",

    },
    content : {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '10px 0px',
        width: '110%',
    },
    image: {
        alignItems: "center",
        width: '13%',
        background: '#EEF2F6',
        borderRadius: '20px',
        padding: '5px',
        right: '10px',
        '&:hover': {
            background: '#ffffff'
        }
    },
    icon: {
        background: '#EEF2F6',
        borderRadius: '80px',
        padding: '15px',
        right: '20px',
        '&:hover': {
            background: '#6440FB'
        }
    },
    categoryheading: {
        fontSize: '30px',
        fontWeight: '700',
        color: '#140342',
    },
    categoryhead: {
        fontSize: "17px",
        color: "#140342",
    },
    categorysubhead: {
        fontSize: "13px",
        color: "#4F547B",
    }


}));

function Cat1() {
    const classes = useStyles();
    const categories = [
        {
            icon: fashion,
            name: "Fashion",
            content: '573+ Content'
        },
        {
            icon: gym,
            name: "GYM",
            content: '573+ Content'
        },
        {
            icon: coach,
            name: "Coaching",
            content: '573+ Content'
        },
        {
            icon: retail,
            name: "Retailing",
            content: '573+ Content'
        },
        {
            icon: b2b,
            name: "B2B",
            content: '573+ Content'
        },
        {
            icon: realestate,
            name: "Real Estate",
            content: '573+ Content'
        },
        {
            icon: social,
            name: "Social media Managers",
            content: '573+ Content'
        },
        {
            icon: finance,
            name: "Finance",
            content: '573+ Content'
        },
    ]

    const [headlines, setHeadlines] = useState([]);
    const [page, setPage] = useState(9);
    const [numberofPages, setNumberOfPages] = useState(10)


    const [items, setItems] = useState([]);

    const [pageCount, setpageCount] = useState([0]);

    let limitsize = 24;


    return (
        <Container className={classes.categorycontainer}>
            <Grid>
                <Typography variant="h5" noWrap component="div" sx={{color: '#140342'}} className={classes.categoryheading}>
                    Top Categories
                </Typography>
                {/*<Typography variant="h6" noWrap component="div" sx={{color: '#4F547B'}}>*/}
                {/*    ...*/}
                {/*</Typography>*/}
            </Grid>
            <Grid container spacing={2} className={classes.stackrow}>

                {
                    categories.map(category =>
                        (
                            <Grid item xs={6} md={3} key={category.id}>

                                <Card className={classes.card}>
                                    <CardContent className={classes.content}>
                                        {/*<IconButton>*/}
                                            <img
                                                className={classes.image}
                                                src={category.icon}
                                                loading="lazy"
                                            />
                                            {/*{<category.icon className={classes.icon}/>}*/}
                                        {/*</IconButton>*/}
                                        <div style={{textAlign: 'left'}}>
                                            <Typography component="div" variant="h5" className={classes.categoryhead}>
                                                {category.name}
                                            </Typography>
                                            <Typography className={classes.categorysubhead} variant="subtitle1" color="text.secondary" component="div">
                                                {category.content}
                                            </Typography>
                                            {/*<div>{category.name}</div>*/}
                                            {/*<div style={{marginTop: '5px'}}>{category.content}</div>*/}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                }
            </Grid>


        </Container>

    );
}

export default Cat1;
