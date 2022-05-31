// import { makeStyles } from '@mui/styles';
import {
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
import HeadlineService from "./SocialmediaService";
import * as React from "react";
import {Pagination, Stack} from "@mui/material";
import ReactPaginate from "react-paginate";
// import { useAnalytics } from 'use-analytics'
// import * as analytics from "analytics";
import googleAnalytics, {track} from "@analytics/google-analytics";
import Analytics from "analytics";
import {Rating} from "@mui/lab";
import {Stars} from "@mui/icons-material";
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
        paddingTop: theme.spacing(5),
        alignItems: "center",
        // backgroundColor: "#fff7ff",
    },
    box: {
        width: "100%",
        paddingBottom: 10,
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

function SocialmediaFeed() {
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

    return (
        <Container className={classes.container}>
            {/*<Box className={classes.box} justify="flex-end">*/}

            {/*    <FormControl fullWidth>*/}
            {/*        <InputLabel id="demo-simple-select-label">Filter by Industry</InputLabel>*/}
            {/*        <Select*/}
            {/*            variant="outlined"*/}
            {/*            labelId="demo-simple-select-label"*/}
            {/*            id="demo-simple-select"*/}
            {/*            // value={""}*/}
            {/*            label="industry"*/}

            {/*        >*/}
            {/*            <MenuItem value="">None</MenuItem>*/}
            {/*            /!*{*!/*/}
            {/*            /!*    // filteredData.length === 0 ? <div>No result found</div> :*!/*/}
            {/*            /!*    headlines.map(item =>*!/*/}
            {/*            /!*        (*!/*/}
            {/*            /!*            <MenuItem key={item.id} value={item.industry}>{item.industry}</MenuItem>*!/*/}

            {/*            /!*        ))*!/*/}
            {/*            /!*}*!/*/}

            {/*        </Select>*/}
            {/*    </FormControl>*/}
            {/*</Box>*/}
            <Grid container spacing={2} className={classes.stackrow}>


                {/*<Stack spacing={2}>*/}

                {/*</Stack>*/}


                {/*{ filteredData.length === 0 ? <div>No result found</div> :*/}
                {
                    items.map(item =>
                        (
                            <Grid item xs={12} md={3} key={item.id}>

                                <Card className={classes.card}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={item.featuredImageUrl}
                                        alt="green iguana"
                                    />
                                    <CardActionArea>
                                        <CardContent className={classes.post}>
                                            <Rating
                                                name="hover-feedback"
                                                value={value}
                                                precision={0.5}
                                                getLabelText={getLabelText}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                                onChangeActive={(event, newHover) => {
                                                    setHover(newHover);
                                                }}
                                                emptyIcon={<Stars style={{ opacity: 0.55 }} fontSize="inherit" />}
                                            />
                                            <Typography
                                                onClick={() => analytics.track('Headline Clicked',
                                                    {headline: item.caption.substr(0, 10) + '...'},
                                                    {
                                                        plugins: {
                                                            // disable this specific track call all plugins except customerio
                                                            all: true,
                                                            // customerio: true
                                                        }
                                                    })}
                                                suppressContentEditableWarning={true}
                                                contentEditable="true" variant="body2" className={classes.post}>
                                                {item.caption}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button className={classes.button}>{item.industry}</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                }

                <Grid container>
                    <nav aria-label="Page navigation example">
                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'-'}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={1}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination justify-content-center"}
                            pageClassName={'page-item'}
                            pageLinkClassName={'page-link'}
                            previousClassName={'page-item'}
                            previousLinkClassName={'page-link'}
                            nextClassName={'page-item'}
                            nextLinkClassName={'page-link'}
                            breakClassName={'page-item'}
                            breakLinkClassName={'page-link'}
                            activeClassName={'active'}
                        />
                    </nav>
                </Grid>

            </Grid>


        </Container>

    );
}

export default SocialmediaFeed;
