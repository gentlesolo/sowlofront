import React from 'react'
import {Grid, ListItemButton, ListItemText, Typography, List, ListItem} from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles(() =>({
    grid : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '0 20px',
        },

    list : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: '14px'
    },
    button : {
        background: '#4F547B',
        // opacity: '0.1',
        borderRadius: '60px',
        margin: '10px 20px'
    },
    text: {
        fontSize: '10px',
    }
    }))

const Footer = () => {
    const classes = useStyles()
  return (
    <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={4}>
            <Typography variant="h6" noWrap component="div" className={classes.text}>
                © 2022 Sowloo. All Right Reserved.
            </Typography>
        </Grid>
        <Grid item xs={6}>
            <List className={classes.list}>
                <ListItem>
                    <ListItemText primary= "Help" />
                     <ListItemText primary= "Privacy Policy" />
                     <ListItemText primary= "Cookie Notice" />
                     <ListItemText primary="Security" />
                     <ListItemText primary="Term of Use" />
                        <ListItemButton className={classes.button}>
                            <LanguageIcon />
                            English
                        </ListItemButton>
                </ListItem>
            </List>
        </Grid>
    </Grid>
  )
}

export default Footer