import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SearchBar from '../containers/search_bar';
import StockList from '../containers/stock_list';
import LandingPage from '../containers/landing_page';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <LandingPage />
            <SearchBar />
            <StockList />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
