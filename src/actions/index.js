import axios from 'axios';

const API_KEY = "UGXPUCUDFIHWVTF0";

const DAILY = 'TIME_SERIES_DAILY';
const WEEKLY = "TIME_SERIES_WEEKLY";
const MONTHLY = 'TIME_SERIES_MONTHLY';

const ROOT_URL = `https://www.alphavantage.co/query?apikey=${API_KEY}`;

export const FETCH_STOCK = 'FETCH_STOCK';

export function fetchStock(stock) {
    const url = `${ROOT_URL}&symbol=${stock}&function=${DAILY}`;
    const request = axios.get(url);

    console.log('Request: ', request);

    return {
        type: FETCH_STOCK,
        payload: request
    };
}