import axios from 'axios';
import { FETCH_USER, FETCH_STOCK } from './types';

const ROOT_URL = 'https://api.iextrading.com/1.0/';
const STOCK = 'stock';
const DAILY = '1d';
const MONTHLY = '1m';
const YEARLY = '1y';

const CHART = 'chart';

export const fetchStock = async (symbol) => {
    const res = await axios.post('/api/newstock', {symbol});

    return {
        type: FETCH_STOCK,
        payload: res.data
    };
}

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
            
    dispatch({type: FETCH_USER, payload: res.data});
};