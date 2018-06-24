import axios from 'axios';

const API_KEY = "UGXPUCUDFIHWVTF0";

const ROOT_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&apikey=${API_KEY}`;

export const FETCH_STOCK = 'FETCH_STOCK';

export function fetchStock(stock) {
    const url = `${ROOT_URL}&symbol=${stock}`;
    const request = axios.get(url);

    return {
        type: FETCH_STOCK,
        payload: request
    };
}