import axios from 'axios';

const URL="https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true";

export const fetchData = async () => {
    try {
        const {data: {totalCases, activeCases, recovered, deaths, lastUpdatedAtApify}} = await axios.get(URL);
        return {totalCases, activeCases, recovered, deaths, lastUpdatedAtApify};
    } catch(error) {
        return error;
    }
}

export const fetchRegions = async () => {
    try {
        const {data: {regionData}} = await axios.get(URL);
        return regionData.map(regions => regions.region);
    } catch(error) {
        return error;
    }
}
