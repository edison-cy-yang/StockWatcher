import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import StockList from '../containers/stock_list';

class Dashboard extends Component {
    render() {
        return(
            <div>
                <h2>Dashboard</h2>
                <SearchBar />
                <StockList />
            </div>
        );
    }
}

export default Dashboard;