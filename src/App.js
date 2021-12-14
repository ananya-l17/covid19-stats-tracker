import { Component } from 'react';
import { Box, Typography, withStyles } from '@material-ui/core';  //withStyles ---> Used with class components
import logo from './images/img2.jpg';
import Boxes from './components/LayoutBoxes';
import Regions from './components/Regions';
import Chart from './components/Chart';
import { fetchData } from './works/api';

const styles = {
    containerStyles: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    header: {
        background: '#ff9012', 
        width: 1000,
        textAlign: 'center',
        fontSize: 35,
        padding: 10
    },
    lastUpdated: {
        color: '#777'
    },
    bgColour: {
        background: '#ffefb0'
    }
}

class App extends Component {
    state = {
        data: {},
        regions: ''
    }
        
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
        console.log(fetchedData);
    }

    render() {
        const { data } = this.state;
        return (
            <Box className={this.props.classes.bgColour}>
                <Box className={this.props.classes.containerStyles}>
                    <Box className={this.props.classes.header}>
                        COVID-19 INDIA STATS TRACKER
                    </Box>
                    <Typography className={this.props.classes.lastUpdated} variant='h6'>Last Updated: {data.lastUpdatedAtApify && new Date(data.lastUpdatedAtApify).toDateString()}</Typography>
                    <img style={{ width: 700, marginTop: 2 }} src={logo} alt="Not found!" />
                    <Boxes data={data}/>
                    <Regions/>
                    <Chart data={data}/>
                </Box>
            </Box>
        )
    }
}

export default withStyles(styles)(App);