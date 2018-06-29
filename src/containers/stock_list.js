import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';


class StockList extends Component {
    renderStock(stockData) {
        const name = stockData[0].data["Meta Data"]["2. Symbol"];

        //process daily data
        var dailyStock = stockData[0].data["Time Series (Daily)"];
        var dailyKeys = Object.keys(dailyStock);
        const dailyClosingPrices = [];
        dailyKeys.forEach( key => {
            dailyClosingPrices.push(dailyStock[key]["4. close"]);
        });

        //process weekly data
        var weeklyStock = stockData[1].data["Weekly Time Series"];
        var weeklyKeys = Object.keys(weeklyStock);
        const weeklyClosingPrices = [];
        weeklyKeys.forEach( key => {
            weeklyClosingPrices.push(weeklyStock[key]["4. close"]);
        });

        //process monthly data
        var monthlyStock = stockData[2].data["Monthly Time Series"];
        var monthlyKeys = Object.keys(monthlyStock);
        const monthlyClosingPrices = [];
        monthlyKeys.forEach( key => {
            monthlyClosingPrices.push(monthlyStock[key]["4. close"]);
        });
    
        return (
            <tr key={name}>
                <td>
                    {name}
                </td>
                <td>
                    <Chart data={dailyClosingPrices} color="red" />
                </td>
                <td>
                    <Chart data={weeklyClosingPrices} color="blue" />
                </td>
                <td>
                    <Chart data={monthlyClosingPrices} color="green" />
                </td>
            </tr>
        )
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Stock</th>
                        <th>Daily</th>
                        <th>Weekly</th>
                        <th>Monthly</th>    
                    </tr>
                </thead>
            
            <tbody>
                {this.props.stock.map(this.renderStock)}
            </tbody>
            </table>
        );
    }
}

function mapStateToProps({ stock }) {
    return { stock };
}

export default connect(mapStateToProps)(StockList);