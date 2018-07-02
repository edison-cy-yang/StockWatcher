import { FETCH_STOCK } from '../actions/index';

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_STOCK:
            console.log(action.payload);
            return state.concat([action.payload]);
    }
    return state;
}