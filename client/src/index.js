import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import App from './components/App';
import reducers from './reducers';

import 'react-bootstrap/dist/react-bootstrap.min';

//const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)(reduxThunk);

const store = createStore(reducers, {}, applyMiddleware(ReduxPromise, reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root')
);
registerServiceWorker();
