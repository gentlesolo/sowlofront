import Box from "@mui/material/Box";
import React from 'react'
import List from "@mui/material/List";
import {Avatar, Collapse, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {CheckBox, CheckBoxOutlineBlank, ExpandLess, ExpandMore, Home, NoteAdd} from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
const Sidebar = () => {
    return (
        <Box bgcolor="" flex={2} p={1} sx={{display: {xs: "none", sm: "block" } }}>

            {/*<List>*/}
            {/*    <ListItemButton>*/}
            {/*        <ListItemIcon>*/}
            {/*            /!*<SendIcon />*!/*/}
            {/*            /!*<Home/>*!/*/}
            {/*            <CheckBoxOutlineBlank/>*/}
            {/*        </ListItemIcon>*/}
            {/*        <ListItemText primary="Dashboard" />*/}
            {/*    </ListItemButton>*/}
            {/*    <ListItemButton>*/}
            {/*        <ListItemIcon>*/}
            {/*            /!*<DraftsIcon />*!/*/}
            {/*            <NoteAdd/>*/}
            {/*        </ListItemIcon>*/}
            {/*        <ListItemText primary="Contents" />*/}

            {/*    </ListItemButton>*/}

            {/*    <ListItemButton>*/}
            {/*        <ListItemIcon>*/}
            {/*            <InboxIcon />*/}
            {/*        </ListItemIcon>*/}
            {/*        <ListItemText primary="Campaigns" />*/}

            {/*    </ListItemButton>*/}

            {/*</List>*/}
        </Box>
    )
}

export default Sidebar