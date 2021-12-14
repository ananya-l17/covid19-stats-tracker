import { Bar } from 'react-chartjs-2';
import { Box, makeStyles } from '@material-ui/core';
import { Chart as ChartJS } from 'chart.js/auto';

const useStyles=makeStyles({
    container: {
        width: '75%',
        marginTop: 30,
        marginBottom: 50
    }
})

const Chart = ({ data: { totalCases, recovered, deaths } }) => {
    const classes=useStyles();
    return (
        <Box className={classes.container}>
            {totalCases ? (
                <Bar
                    data={{
                        labels: ['Active Cases', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            data: [totalCases, recovered, deaths],
                            backgroundColor: [
                                'rgba(0, 0, 255, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(255, 0, 0, 0.5)'
                            ]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: 'Currect situation' }
                    }}
                />) : ''}
        </Box>
    )
}

export default Chart;