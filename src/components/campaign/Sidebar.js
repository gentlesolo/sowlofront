import Box from "@mui/material/Box";
import React from 'react'
import List from "@mui/material/List";
import {
    Accordion, AccordionDetails, AccordionSummary,
    Avatar,
    Checkbox,
    Collapse,
    FormControlLabel,
    FormGroup,
    ListItem,
    ListItemAvatar,
    ListItemText, makeStyles
} from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {CheckBox, CheckBoxOutlineBlank, ExpandLess, ExpandMore, Home, NoteAdd} from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(15),
        alignItems: "center",
        // backgroundColor: "#fff7ff",
    },
    accordionhead: {
        fontSize: "27px",
        fontWeight: "bold",
    },
    category: {
        fontSize: "5px",
    }


}));


const Sidebar = () => {
    const classes = useStyles();
    return (
        <Box bgcolor="" flex={2} p={1} sx={{display: {xs: "none", sm: "block" } }}>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.accordionhead}>Category</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        <ListItemButton>
                            <ListItemIcon>
                                <Checkbox
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </ListItemIcon>
                            <ListItemText className={classes.category} primary="Fashion" />
                            <Typography>(18)</Typography>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <Checkbox
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </ListItemIcon>
                            <ListItemText primary="GYM" />
                            <Typography>(10)</Typography>
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <Checkbox
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </ListItemIcon>
                            <ListItemText primary="Real Estate" />
                            <Typography>(6)</Typography>
                        </ListItemButton>

                        <Typography>
                            Show more
                        </Typography>

                    </List>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.accordionhead}>Marketing Goals</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        <ListItemButton>
                            <ListItemIcon>
                                <Checkbox
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </ListItemIcon>
                            <ListItemText className={classes.category} primary="Fashion" />
                            <Typography>(18)</Typography>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <Checkbox
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </ListItemIcon>
                            <ListItemText primary="GYM" />
                            <Typography>(10)</Typography>
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <Checkbox
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </ListItemIcon>
                            <ListItemText primary="Real Estate" />
                            <Typography>(6)</Typography>
                        </ListItemButton>

                        <Typography>
                            Show more
                        </Typography>

                    </List>
                </AccordionDetails>
            </Accordion>


            <Typography>

            </Typography>


        </Box>
    )
}

export default Sidebar