const API_KEU = "UGXPUCUDFIHWVTF0";

export const FETCH_STOCK = 'FETCH_STOCK';

export function fetchStock() {
    return {
        type: FETCH_STOCK
    };
}