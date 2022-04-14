import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import group from '../../assets/Group.png'

const pages = [
  {
    name: 'Home',
    icon: KeyboardArrowDownIcon
  },
  {
    name: 'Courses',
    icon: KeyboardArrowDownIcon
  },
  {
    name: 'Events',
    icon: KeyboardArrowDownIcon
  },
  {
    name: 'Blog',
    icon: KeyboardArrowDownIcon
  },
  {
    name: 'Pages',
    icon: KeyboardArrowDownIcon
  },
  {
    name: 'Contact',
    icon: KeyboardArrowDownIcon
  },
]

const Navbar = () => {
  const [open, setOpen] = useState()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  border: 'none',
  fontFamily: [
    'Arial',
    'sans-serif',
  ].join(','),
  '&:hover': {
    backgroundColor: 'none',
    borderColor: 'none',
    boxShadow: 'none',
    border: 'none',
    borderRadius: '50%'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'none',
    borderColor: 'none',
    border: 'none',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

  return (
    <AppBar position="fixed" sx={{background: "white", color: "black", top: '0rem'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} >
            SOWLOO
          </Typography>
          <Divider orientation="vertical" variant="middle" flexItem  style={{ minHeight: "10px", height: '30px', color: "#EDEDED", marginTop: "20px" }}/>
          
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex', fontSize: "15px",  marginLeft: "7px"} }}>
            Explore
          </Typography>
          <Divider orientation="vertical" variant="middle" flexItem  style={{ minHeight: "10px", height: "30px", color: "#EDEDED", marginTop: "20px" }}/>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}}}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <BootstrapButton disableRipple endIcon={page.name === "Contact"? null : <page.icon/>} sx={{backgroundColor: "white", color: "black", padding: '2px',   fontSize:"14px", border: "unset"}}>{page.name}</BootstrapButton>
                </MenuItem>
              ))} 
          </Box>
          <Box sx={{ flexGrow: 0 , display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'space-between' }}>
              {/* <img src={group}/> */}
             <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon sx={{padding: '3px'}}/>
          </IconButton>
           <Divider orientation="vertical" variant="middle" flexItem  style={{ minHeight: "30px", color: "gray", marginTop: "15px"}}/>
          <img src={group} style={{padding: '0 23px'}}/>
          <Divider orientation="vertical" variant="middle" flexItem  style={{ minHeight: "30px", color: "gray", marginTop: "15px"}}/>
          
            <Typography noWrap sx={{padding: '0 15px'}}>Log in</Typography>
            <Typography sx={{ border: 'none', background: '#6440FB', borderRadius: '60px', padding: '10px 20px', fontWeight: 'bold', color: 'black' }}>Sign Up</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;