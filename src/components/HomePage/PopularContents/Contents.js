import React from 'react';
import {Card, CardActionArea, CardActions, CardContent, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Button from "@mui/material/Button";
import {useSelector} from "react-redux";
import {selectAllContents} from "../../../features/content/contentSlice";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles(() =>({
    card: {
        width: '25%',
        height: "150px",
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '15px',
    },
    content : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'left',
        fontSize: '14px',
        padding: '5px 15px',
        width: '100%',
    },
}))

const Contents = ({selectedContent, setSelectedContent}) => {
    const contents = useSelector(selectAllContents)
    const classes = useStyles()
    return (

        <Grid>
        {contents.map((content, index) =>(
        <Card key={index} className={classes.card} onClick={() => setSelectedContent(content.content)} >
            <CardActionArea>
                <CardContent >
                    <Typography variant="body2" component="div" sx={{fontSize: "16px"}}>
                        {/*{content.content.substr(0, 80) + '...'}*/}
                        {content.content.length > 80 ? `${content.content.substring(0, 70)}...` : content.content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{display: 'flex', justifyContent: 'space-between', textAlign: 'left'}}>
                <Button size="small" sx={{fontSize: '16px', color: '#140342', fontWeight: '700', textTransform: 'capitalize'}}>
                  Goal: {content.marketingGoals}
                </Button>
                <Button size="small" sx={{fontSize: '16px', color: '#140342', fontWeight: '700', textTransform: 'capitalize'}}>
                   Industry: {content.industry}
                </Button>
                <Button size="small" sx={{fontSize: '16px', color: '#140342', fontWeight: '700', textTransform: 'capitalize'}}>
                    Words: {content.wordCount}
                </Button>
            </CardActions>
        </Card>
            ))}
        </Grid>
    );
};

export default Contents;
