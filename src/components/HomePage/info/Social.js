import React from 'react'
import {Grid, IconButton, Typography} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {makeStyles} from '@mui/styles'


const useStyles = makeStyles(() =>({
    container: {
            padding: '30px 0'
        },
    grid : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
    },
    text: {
        color: '#140342'
    }
}))

const Social = () => {
    const classes =useStyles();
  return (
    <Grid container spacing={2} className={classes.container}>
        <Grid item xs={4}>
            <Typography variant="h6" noWrap component="div" className={classes.text}>
                Sowloo
            </Typography>
        </Grid>
        <Grid item xs={8} className={classes.grid}>
            <Typography variant="h6" noWrap component="div" className={classes.text}>
                Follow us on social media
             </Typography>
            <div style={{margin: '0px 15px'}}>
                <IconButton>
                    <FacebookIcon />
                </IconButton>
                <IconButton>
                    <InstagramIcon />
                </IconButton>
                <IconButton>
                    <TwitterIcon />
                </IconButton>
                <IconButton>
                    <LinkedInIcon />
                </IconButton>
            </div>
        </Grid>
    </Grid>
  )
}

export default Social