import { Box, CardContent, Card, Grid, Typography, makeStyles } from '@material-ui/core';
import CountUp from 'react-countup';

const useStyles=makeStyles({
    header: {
        background: '#F5F5F5',
        padding: 10
    }
})

const CardComponent = ({cardTitle, value, description, lastUpdatedAtApify}) => {
    const classes=useStyles();
    return (
        <Grid component={Card} style={{margin: 50, borderBottom: '10px solid orange'}}>
            <Box className={classes.header}>
                <Typography variant='h5'>{cardTitle}</Typography>
            </Box>
            <CardContent>
                <Typography variant='h5'>
                    <CountUp start={0} end={value} duration={4} separator="," />
                </Typography>
                <Typography>{description}</Typography>
                <Typography color='textSecondary'>{new Date(lastUpdatedAtApify).toDateString()}</Typography>
            </CardContent>
        </Grid>
    );
}

export default CardComponent;