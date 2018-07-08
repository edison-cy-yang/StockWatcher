import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import SearchBar from '../containers/search_bar';
import StockList from '../containers/stock_list';
import LandingPage from '../containers/landing_page';
import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;


class App extends Component {
  //go fetch user when the component is rendered
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

//connect helper to link actions to props of the component
export default connect(null, actions)(App);
