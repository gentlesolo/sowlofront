import { Typography, Box } from '@mui/material'
import React from 'react'
import FeedIcon from '@mui/icons-material/Feed';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import RadioIcon from '@mui/icons-material/Radio';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import Category from './Category'
import {makeStyles} from '@mui/styles'


const useStyles = makeStyles(() =>({
    card : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'space-between',
        flexWrap: 'wrap',
        margin: '30px 200px',
        width: '70%',  
        },
    }))

const Categories = () => {
  const classes = useStyles()

  const categories = [
    {
        icon: FeedIcon,
        name: "Social Media",
        content: '573+ Content'
    },
    {
        icon: NewspaperIcon,
        name: "Newsletter",
        content: '573+ Content'
    },
    {
        icon: NewReleasesIcon,
        name: "Headlines",
        content: '573+ Content'
    },
    {
        icon: CreateNewFolderIcon,
        name: "Blog Post",
        content: '573+ Content'
    },
    {
        icon: FeaturedVideoIcon,
        name: "Paid Advert",
        content: '573+ Content'
    },
    {
        icon: RadioIcon,
        name: "Radio Jingle",
        content: '573+ Content'
    },
    {
        icon: VideoLibraryIcon,
        name: "Video Ad",
        content: '573+ Content'
    },
    {
        icon: HistoryEduIcon,
        name: "Testimonials",
        content: '573+ Content'
    },
  ]

  return (
    <div style={{top: '100px', position: 'relative', width: '100%'}}>
      <Typography variant="h5" noWrap component="div" sx={{color: '#140342'}}>
          Top Categories
      </Typography>
      <Typography variant="h6" noWrap component="div" sx={{color: '#4F547B'}}>
          Lorem ipsum dolor sit amet, consectetur.
      </Typography>
      <div className={classes.card}>
        {categories.map((category,index) => (
          <Category key={index} category={category}/>
        ))}
      </div>
        
    </div>
  )
}

export default Categories