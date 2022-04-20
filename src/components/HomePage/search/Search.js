import { Typography } from '@mui/material'
import React from 'react'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const Search = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'space-between', textAlign: 'left', margin: '150px 0'}} >
        <Typography variant="h4" noWrap component="div" gutterBottom sx={{color: '#140342', fontWeight: '700'}}>
            Find Your Preferred <br /><Typography variant="h4" component="span" sx={{color: '#6440FB', fontWeight: '700'}}>Contents</Typography> & Improve Your Skills
        </Typography>
        <Typography variant="h6" noWrap component="div" gutterBottom sx={{color: '#140342', fontWeight: '400', margin: '10px 0', textTransform: 'capitalize'}}>
            Build skills with courses, certificates, and degrees online from <br/>world-class universities and companies.
        </Typography>
        <FormControl sx={{ m: 1, width: '75%', borderRadius: '20%', border: 'none', borderColor: 'white', backgroundColor: 'white', margin: '30px 0'}} variant="filled">
          <OutlinedInput
            id="outlined-adornment-weight"
            value="what do you want to do today"
            endAdornment={<InputAdornment position="end"><SearchIcon style={{backgroundColor: '#6440FB', borderRadius: '50%', padding: '10px'}}/></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight', "&&:after": {border: "none"}
            }} />
        </FormControl>
        <Typography variant="h6" noWrap component="div" sx={{color: '#140342', fontWeight: '400'}}>
            Trending Search: Development, Business, Design, Marketing 
        </Typography>
    </div>
  )
}

export default Search;
