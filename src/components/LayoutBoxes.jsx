import { Box, Typography, makeStyles, CircularProgress, Grid } from '@material-ui/core';  //makeStyles ---> Used with functional components
import Card from './Card';

const useStyles = makeStyles({
    mainComponent: {
        margin: '35px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    container: {
        color: 'darkred',
        marginTop: -12,
        background: '#f2a466'
    }
})

const LayoutBoxes = ({ data: {totalCases, activeCases, recovered, deaths, lastUpdatedAtApify} }) => {
    const classes = useStyles();

    if (!activeCases) {
        return <CircularProgress />;
    }

    return (
        <Box className={classes.mainComponent}>
            <Typography className={classes.container} variant='h4' gutterBottom>Tracking Live Details</Typography>
            <Grid container spacing={3} justify='center'>
                <Card 
                    cardTitle="Total Cases"
                    value={totalCases}
                    description="Total number of COVID-19 cases found in India "
                    lastUpdatedAtApify={lastUpdatedAtApify}
                />
                <Card 
                    cardTitle="Active Cases"
                    value={activeCases}
                    description="Number of active cases of COVID-19 in India "
                    lastUpdatedAtApify={lastUpdatedAtApify}
                />
            </Grid>
            <Grid container spacing={3} justify='center'>
                <Card 
                    cardTitle="Recovered"
                    value={recovered}
                    description="Number of patients recovered from COVID-19 "
                    lastUpdatedAtApify={lastUpdatedAtApify}
                />
                <Card 
                    cardTitle="Deaths"
                    value={deaths}
                    description="Number of deaths caused by the pandemic "
                    lastUpdatedAtApify={lastUpdatedAtApify}
                />
            </Grid>
        </Box>
    )
}

export default LayoutBoxes;