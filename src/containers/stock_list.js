import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';


class StockList extends Component {
    renderStock(stockData) {
        const companyInfo = stockData[0].data;
        const symbol = companyInfo.symbol;

        const dailyStock = stockData[1].data;
        const dailyClosingPrices = dailyStock.map(price => price.marketAverage);
        console.log(dailyClosingPrices);

        const monthlyStock = stockData[2].data;
        const monthlyClosingPrices = monthlyStock.map(price => price.close);

        const yearlyStock = stockData[3].data;
        const yearlyClosingPrices = monthlyStock.map(price => price.close);

        return (
            <tr key={symbol}>
                <td>
                    {symbol}
                </td>
                <td>
                    <Chart data={dailyClosingPrices} color="red" />
                </td>
                <td>
                    <Chart data={monthlyClosingPrices} color="blue" />
                </td>
                <td>
                    <Chart data={yearlyClosingPrices} color="green" />
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
                        <th>Monthly</th>
                        <th>Yearly</th>    
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