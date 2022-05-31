import { Link } from "react-router-dom"
import Users from '../users/Users'
import {Grid, Typography} from "@material-ui/core";

const Admin = () => {
    return (
        <Grid>
            <Typography>Admins Page</Typography>
            <br/>
            <Users/>
            <br/>
            <Typography>You must have been assigned an Admin role</Typography>
            <Grid>
                <Link to="/">Home</Link>
            </Grid>
        </Grid>
    )
}

export default Admin