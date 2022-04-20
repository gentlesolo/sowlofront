import React from 'react'
import {Grid, List, ListItem, ListItemText, Typography, FormControl, OutlinedInput, Button, InputAdornment, Link,
    InputBase, alpha
} from '@mui/material'
import {makeStyles} from '@mui/styles'
import { AddBoxSharp } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';


const useStyles = makeStyles((theme) =>({
    grid : {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // flexWrap: 'wrap',
        paddingTop: '25px'
        },
    list: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // alignItems: 'left',
        // padding: '0',
        textAlign: 'left'
},
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25)
        },
        // borderRadius: theme.shape.borderRadius,
        borderRadius: '80%',
        // width: "40%",
        // [theme.breakpoints.down('sm')]: {
        //     display: (props) => (props.open ? "flex" : "none"),
        //     width: "70%"
        // }
    },
    input: {
        color: "white",
        marginLeft: theme.spacing(1)
    },
    }))

const AdditionalInfo = () => {
const classes = useStyles()
const categories = ["Social Media", "Newsletter", "Headlines", "Blog Post", "Paid Advert", "Radio Jingle", "Video Ad", "Testimonial"]
const infos = ["About Us", "Learner Stories", "Learner Stories", "Courses", "Press", "Leadership", "Contact Us"]
const others = ["Documentation", "FAQS", "Dashboard", "Contact"]

  return (
    <Grid container spacing={2} className={classes.grid}>
        <div className={classes.list}>
            <Typography variant="h6" noWrap component="div" sx={{color: '#140342', padding: '10px 0'}}>About Us</Typography>
            {infos.map((info, index) => (
                <Link key={index} href="#" underline="none" sx={{color: '#4F547B', padding: '5px'}}>{info}</Link>
                ))} 
        </div>        

        <div className={classes.list}>
            <Typography variant="h6" noWrap component="div" sx={{color: '#140342', padding: '10px 0'}}>Categories</Typography>
            {categories.map((category, index) => (
                <Link key={index} href="#" underline="none" sx={{color: '#4F547B', padding: '5px'}}>{category}</Link>
                ))} 
        </div>

        <div className={classes.list}>
            <Typography variant="h6" noWrap component="div" sx={{color: '#140342', padding: '10px 0'}}>Support</Typography>
            {others.map((other, index) => (
                <Link key={index} href="#" underline="none" sx={{color: '#4F547B', padding: '5px'}}>{other}</Link>
                ))} 
        </div>

        <Grid>
            <Typography variant="h6" noWrap component="div" sx={{color: '#140342'}}> 
                GET IN TOUCH
            </Typography>
            <Typography variant="h6" noWrap component="div" sx={{color: '#4F547B'}}>
                We don’t send spam so don’t worry.
            </Typography>
        {/*     <FormControl sx={{ m: 1, width: '70%', borderRadius: '20%', border: 'none', borderColor: 'white', backgroundColor: 'white', margin: '30px 0'}} variant="filled">*/}
        {/*        <OutlinedInput*/}
        {/*        id="outlined-adornment-weight"*/}
        {/*        value="Email..."*/}
        {/*        endAdornment={<InputAdornment position="end"><Button>Submit</Button></InputAdornment>}*/}
        {/*        aria-describedby="outlined-weight-helper-text"*/}
        {/*        inputProps={{*/}
        {/*        'aria-label': 'weight', "&&:after": {border: "none"}*/}
        {/*        }} />*/}
        {/*</FormControl>*/}
            <div className={classes.search}>
                <SearchIcon />
                <InputBase placeholder={"Search..."} className={classes.input}/>
                {/*<CancelIcon className={classes.cancel} onClick={() => setOpen(false)}/>*/}
            </div>
            
        </Grid>
    </Grid>
  )
}

export default AdditionalInfo