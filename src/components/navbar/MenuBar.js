import React, {useState} from 'react';
import {Box, Button, Divider, IconButton, MenuItem} from "@mui/material";
import {Link} from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import group from "../../assets/icon/Group.png";


const pages = [
    {
        name: 'Home',
        path: ""
    },
    {
        name: 'Social Media',
        path: "social-media"
    },
    {
        name: 'Campaign',
        path: "campaign"
    },
    {
        name: 'Dashboard',
        path: "dashboard/admin"
    },
]

const MenuBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex'}}}>
                {pages.map((page) => (
                    <MenuItem key={page}>
                        <Link to={`/${page.path}`} style={{textDecoration: 'none'}}>
                            <Button sx={{color: "black", padding: '2px', fontSize:"14px",
                                border: "none", textTransform: 'capitalize'}}>{page.name}</Button>
                        </Link>
                    </MenuItem>
                ))}
            </Box>
            <Box sx={{ flexGrow: 0 , display: { xs: 'none', md: 'flex' }, alignItems: 'center',
                justifyContent: 'space-between' }}>
                <IconButton size="large" aria-label="search" color="inherit">
                    <SearchIcon sx={{padding: '3px'}} onClick={() => setOpen(true)}/>
                </IconButton>
                <Divider orientation="vertical" variant="middle" flexItem
                         style={{ minHeight: "30px", color: "gray", marginTop: "15px"}}/>
                <img src={group} style={{padding: '0 23px'}}/>
                <Divider orientation="vertical" variant="middle" flexItem
                         style={{ minHeight: "30px", color: "gray", marginTop: "15px"}}/>

                <Button href="/login" variant="text">Login</Button>
                <Button
                    href="/signup"
                    variant="filled"
                    sx={{ border: 'none', background: '#dedbf3',
                        borderRadius: '60px', padding: '10px 30px',
                        fontWeight: 'bold', color: '#6440FB',
                        textTransform: 'capitalize'}}>Sign Up
                </Button>
            </Box>
        </div>
    );
};

export default MenuBar;
