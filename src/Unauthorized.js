import { useNavigate } from "react-router-dom"
import {Grid, Typography} from "@material-ui/core";

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <Grid>
            <Typography>
                Unauthorized
            </Typography>
            <Typography>
                You do not have access to the requested page
            </Typography>

            <button onClick={goBack}>Go Back</button>

        </Grid>
    )
}