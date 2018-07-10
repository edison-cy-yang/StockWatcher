import axios from 'axios';
import { FETCH_USER, FETCH_STOCK } from './types';

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