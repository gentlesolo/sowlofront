import {Typography, Grid, Divider, IconButton, Stack} from '@mui/material'
import React from 'react'
import amazon from '../../assets/icon/Group(1).png'
import cisco from '../../assets/icon/Group(2).png'
import amd from '../../assets/icon/amd-logo-1-2.png'
import dropcam from '../../assets/icon/dropcam.png'
import logitech from '../../assets/icon/logitech-2-1-3-1.png'
import spotify from '../../assets/icon/Spotify-2-2.png'
import {makeStyles} from '@mui/styles'
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia, Container,
    InputBase
} from "@material-ui/core";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import img from "../../assets/images/Group39.svg";
import {Loyalty, TextsmsSharp, Timer} from "@mui/icons-material";
import brandawareness from "../../assets/images/brandawareness.png";
import revenuegrowth from "../../assets/images/revenuegrowth.png";
import loyalty from "../../assets/images/Loyalty.png";
import consultant from "../../assets/images/consultant.jpg";
import affiliate from "../../assets/images/affiliate.jpeg";
import website from "../../assets/images/website.jpg";
import logistics from "../../assets/images/logistics.jpg";
import education from "../../assets/images/education.png";


const useStyles = makeStyles((theme) =>({
    clientcontainer: {
        width: "100%",
        padding: "100px 0",
        color: "white",
        backgroundColor: "#FFFFFF",
        top: 0,
        borderBottom: "1px solid #ece7e7",
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "#FFFFFF",
            color: "#555",
        },
    },
    // compcontainer: {
    //     marginTop: "20px",
    //     alignItems: "center",
    //     [theme.breakpoints.down("sm")]: {
    //         marginTop: "20px",
    //     },
    // },
    // catleftsection: {
    //     paddingTop: "2%",
    //     [theme.breakpoints.down("sm")]: {
    //         backgroundColor: "#FFFFFF",
    //         color: "#555",
    //         padding: "15px",
    //         width: "100%",
    //     },
    // },
    clientheading: {
        textAlign: "center",
        paddingBottom: "100px",
        fontSize: "10px",
        fontWeight: '500',
        lineHeight: '28px',
        color: "#140342",
    },
    catsubheading: {
        justifyContent: "center",
        textAlign: "center",
        // width: "250px",
        paddingBottom: "50px",
        fontSize: "10px",
        fontWeight: '500',
        lineHeight: '28px',
        color: "#140342",
    },
    // btn : {
    //     justifyContent: "center",
    //     textAlign: "center",
    // },
    btnclick : {
        justifyContent: "center",
        textAlign: "center",
        color: "#ffffff !important",
        backgroundColor: "#6440FB !important",
    },
    camphead: {
        textAlign: "center",
        fontSize: "10px",
        fontWeight: '500',
        lineHeight: '28px',
        color: "#140342",
    },
    // companyicon: {
    //     margin: '0px 100px',
    //     top: '20px',
    //     [theme.breakpoints.down("sm")]: {
    //         margin: '20px',
    //     },
    // },
    image: {
        alignItems: "center",
        width: '20%',
    },
    }))

const ClientResult = () => {
    const classes = useStyles()
    const categories = [
        {
            id: 1,
            icon: brandawareness,
            name: "Increased Brand Awareness",
            content: '573+ Content'
        },
        {
            id: 2,
            icon: revenuegrowth,
            name: "5X revenue growth",
            content: '573+ Content'
        },
        {
            id: 3,
            icon: loyalty,
            name: "15X increase in Customer loyalty",
            content: '573+ Content'
        },
    ]

    const companiesIcon = [
        {
            id: 1,
            icon: amazon
        },
        {
            id: 2,
            icon: amd
        },
        {
            id: 3,
            icon: cisco
        },
        {
            id: 4,
            icon: dropcam
        },
        {
            id: 5,
            icon: logitech
        },
        {
            id: 6,
            icon: spotify
        }
    ]

  return (
      <Container className={classes.clientcontainer}>
          <Grid>
              <Typography variant="h5" noWrap component="div" sx={{color: '#140342'}} className={classes.clientheading}>
                  Our subscribers have seen
              </Typography>
          </Grid>
          <Grid container spacing={5} className={classes.stackrow}>

              {
                  categories.map(category =>
                      (
                          <Grid item xs={12} md={4} key={category.id} style={{textAlign: "center"}}>

                              <img
                                  className={classes.image}
                                  src={category.icon}
                                  loading="lazy"
                              />
                              <Typography gutterBottom variant="h6" component="h4" className={classes.camphead}>
                                  {category.name.substr(0, 150) + '...'}
                              </Typography>

                          </Grid>
                      ))
              }





              {/*<Grid>*/}
              {/*    <Typography variant="div"*/}
              {/*                component="div"*/}
              {/*                sx={{color: '#140342', fontSize: '16px', paddingTop: '50px'}} className={classes.catsubheading}>*/}
              {/*        The right marketing campaign can be the difference between a business*/}
              {/*        <br/>that’s just getting by and a business that’s skyrocketing to success.*/}
              {/*    </Typography>*/}
              {/*</Grid>*/}
              {/*<Grid maxWidth="xl" component="div" className={classes.btn}>*/}
              {/*    <Box>*/}
              {/*        <Button className={classes.btnclick}*/}
              {/*                size="large"*/}
              {/*                variant="contained"*/}
              {/*                href="#contained-buttons">Setup Your First Campaign*/}
              {/*        </Button>*/}
              {/*    </Box>*/}
              {/*</Grid>*/}

          </Grid>
          <Stack spacing={2} justifyContent="center" direction="column"
                 alignItems="center" padding="0px 20px">
              <Typography variant="p"
                          component="p"
                          sx={{color: '#140342', fontSize: '16px', paddingTop: '50px'}} className={classes.catsubheading}>
                  The right marketing campaign can be the difference between a business
                  <br/>that’s just getting by and a business that’s skyrocketing to success.
              </Typography>
              <Button className={classes.btnclick}
                      size="large"
                      variant="contained"
                      href="#contained-buttons">Setup Your First Campaign
              </Button>
              {/*<Item>Item 3</Item>*/}
          </Stack>


      </Container>
  )
}

export default ClientResult
