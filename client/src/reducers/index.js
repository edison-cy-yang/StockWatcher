import { combineReducers } from 'redux';
import StockReducer from './reducer_stock';

const rootReducer = combineReducers({
  stock: StockReducer
});

export default rootReducer;
