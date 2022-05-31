// import { makeStyles } from '@mui/styles';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent, CardMedia,
    Container, FormControl, Grid, InputLabel,
    makeStyles, MenuItem, Select,
    Typography
} from "@material-ui/core";
// import ListSocialmedia from "./headline/ListSocialmedia";
import {useEffect, useState} from "react";
import HeadlineService from "./CampaignService";
import * as React from "react";
import {Pagination, Stack} from "@mui/material";
import ReactPaginate from "react-paginate";
// import { useAnalytics } from 'use-analytics'
// import * as analytics from "analytics";
import googleAnalytics, {track} from "@analytics/google-analytics";
import Analytics from "analytics";
import {Rating} from "@mui/lab";
import {Stars, TextsmsSharp, Timer} from "@mui/icons-material";
import fashion from "../../assets/images/fashion.jpg";
import skincare from "../../assets/images/skincare.jpg";
import food from "../../assets/images/food.jpg";
import consultant from "../../assets/images/consultant.jpg";
import affiliate from "../../assets/images/affiliate.jpeg";
import website from "../../assets/images/website.jpg";
import logistics from "../../assets/images/logistics.jpg";
import education from "../../assets/images/education.png";
// import analytics from "analytics";
// import {Home} from "@mui/icons-material";

const myPlugin = {
    name: 'my-custom-plugin',
    page: ({payload}) => {
        console.log('page view fired', payload)
    },
    track: ({payload}) => {
        console.log('track event payload', payload)
    }
}

const analytics = Analytics({
    app: 'writa',
    plugins: [
        myPlugin,
        googleAnalytics({
            trackingId: 'UA-222078699-1'
        })
    ]
})

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(15),
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
    },
    post: {
        outline: "0 solid transparent",
        fontFamily: "Sora",
        color: "#140342",
        fontSize: "15px",
        fontWeight: "400"
    },
    button: {
        color: "#160647",
        fontSize: 11,
        size: 'small',
    },
    pageLinkClassName: {
        color: "#160647",

    },
    icon: {
        maxHeight: "249px"
        //background: '#EEF2F6',
        //borderRadius: '80px',
        //padding: '15px',
        //right: '20px',
        // '&:hover': {
        //     background: '#6440FB'
        // }
    },
    catheading: {
        fontSize: '30px',
        fontWeight: '700',
        color: '#140342',
    },
    camphead: {
        textAlign: "left",
        fontSize: "16px",
        fontWeight: '500',
        lineHeight: '28px',
        color: "#140342",
    },
    campsub: {
        textAlign: "left",
        fontSize: "13px",
        color: "#4F547B",
    },
    avatar: {
        width: '20px',
        height: '20px',
    },
    days: {
        fontSize: '12px',
    },
    avatartext: {
        fontSize: '10px',
    },
    amount: {
        fontSize: '16px',
        fontWeight: '500',
        alignItems: 'right',
        justifyContent: 'center',
        position: 'relative',
        left: '40px',
        color: '#140342',
        // [theme.breakpoints.down("sm")]: {
        //     position: 'relative',
        //     left: '10px',
        // },
    },


}));

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}



const CampaignFeed = () => {
    const classes = useStyles();

    const [headlines, setSocialmedia] = useState([]);
    const [page, setPage] = useState(9);
    const [numberofPages, setNumberOfPages] = useState(10);
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    // useEffect(() => {
    //     HeadlineService.getAllSocialmedia().then((response) => {
    //         setSocialmedia(response.data)
    //         console.log(response.data);
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }, [])

    // useEffect(() => {
    //     setFilteredData(headlines.filter((headline) => headline.industry?.toLowerCase().includes(search?.toLowerCase()))
    //     )
    // }, [search, headlines]);
    //const { track, identify } = analytics

    const [items, setItems] = useState([]);

    const [pageCount, setpageCount] = useState([0]);

    let limitsize = 24;

    useEffect(() => {
        const getSocialmedia = async () => {
            const res = await fetch(
                `http://localhost:8000/api/v1/get/socialmedia?page=0&size=${limitsize}`);
            const data = await res.json();
            const total = res.headers.get('Content-Range');
            setpageCount(Math.ceil(total / limitsize));
            // console.log(total/30);
            setItems(data);
        };
        getSocialmedia();

    }, [page]);

    // console.log(items);

    const fetchSocialmedia = async (currentPage) => {
        const res = await fetch(
            `http://localhost:8000/api/v1/get/socialmedia?page=${currentPage}&size=${limitsize}`);
        const data = await res.json();
        return data;
    }


    const handlePageClick = async (data) => {
        // console.log(data.selected);
        let currentPage = data.selected + 1
        const headlinesFormServer = await fetchSocialmedia(currentPage);
        setItems(headlinesFormServer);
        window.scroll(0, 0);
    };

    function handleFeedClick() {
        console.log('item clicked');
    }

    const categories = [
        {
            id: 1,
            icon: fashion,
            name: "30 Days Lead generation Campaign",
            content: '573+ Content'
        },
        {
            id: 2,
            icon: skincare,
            name: "Newsletter",
            content: '573+ Content'
        },
        {
            id: 3,
            icon: food,
            name: "Headlines",
            content: '573+ Content'
        },
        {
            id: 4,
            icon: consultant,
            name: "Blog Post",
            content: '573+ Content'
        },
        {
            id: 5,
            icon: affiliate,
            name: "Paid Advert",
            content: '573+ Content'
        },
        {
            id: 6,
            icon: website,
            name: "For website designers who need customers",
            content: '573+ Content'
        },
        {
            id: 7,
            icon: logistics,
            name: "Attract the right customers for your logistics business",
            content: '573+ Content'
        },
        {
            id: 8,
            icon: education,
            name: "The sales machine campaign for your coaching service",
            content: '573+ Content'
        },
    ]

    return (
        // <Container className={classes.container}>

            <Box bgcolor="" flex={10} container p={2} className={classes.stackrow}>

                <Grid>
                    <Typography style={{width: '20%', float: 'left'}}>Showing 250 total results</Typography>

                    <FormControl style={{width: '20%', float: 'right'}}>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid container spacing={2} className={classes.stackrow}>

                    {
                        categories.map(category =>
                            (
                                <Grid item xs={12} md={3} key={category.id}>

                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                style={{height: '250px'}}
                                                alt="green iguana"
                                                // height="140"
                                                //src={category.icon}
                                                image={category.icon}
                                                className={classes.icon}
                                                loading="lazy"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div" className={classes.camphead}>
                                                    {category.name.substr(0, 50) + '...'}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" className={classes.campsub}>
                                                    {category.content}
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
                                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className={classes.avatar} />
                                            <Button className={classes.avatartext}>Solomon Archibong</Button>
                                            <Typography align="right" className={classes.amount}>₦ 15,000</Typography>
                                        </CardActions>
                                    </Card>

                                </Grid>
                            ))
                    }
                </Grid>
            </Box>
        // </Container>

    );
}

export default CampaignFeed;
