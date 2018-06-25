import { FETCH_STOCK } from '../actions/index';

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_STOCK:
            console.log(action.payload.data["Time Series (Daily)"]);
            ///return [ action.payload.data, ...state]
            // dataArray = [];
            // stock = action.payload.data["Time Series (Daily)"];
            // keys = Object.keys(stock);
            // keys.forEach(key => {
            //     dataArray.push(stock[key]);
            // });
            return state.concat([action.payload.data]);
    }
    return state;
}