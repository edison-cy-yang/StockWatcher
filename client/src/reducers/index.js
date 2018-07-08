import { combineReducers } from 'redux';
import StockReducer from './reducer_stock';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  stock: StockReducer,
  auth: authReducer
});

export default rootReducer;
