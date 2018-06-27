import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

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
                    <Sparklines height={120} width={180} data={dailyClosingPrices}>
                        <SparklinesLine color="red" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={120} width={180} data={weeklyClosingPrices}>
                        <SparklinesLine color="blue" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={120} width={180} data={monthlyClosingPrices}>
                        <SparklinesLine color="green" />
                    </Sparklines>
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