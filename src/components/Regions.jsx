import { useEffect, useState } from 'react';
import { fetchRegions} from '../works/api';
import { Typography, NativeSelect } from '@material-ui/core';

const Regions = () => {
    const [indianRegions, setRegions] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            setRegions(await fetchRegions());
        }
        fetchApi();
    }, [])
    return (
        <>
            <Typography style={{ marginBottom: 25 }} variant='h5' color="textSecondary">
                Reported cases or deaths in state/union territory of India
            </Typography>
            <NativeSelect>
                <option value="">Delhi</option>
                {indianRegions.map((region, i) => {
                    return (
                        <option key={i} value={region}>{region}</option>
                    )
                })}
            </NativeSelect>
        </>
    )
}

export default Regions;