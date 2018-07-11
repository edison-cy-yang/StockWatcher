import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';


class StockList extends Component {
    renderStock(stockData) {
        const companyInfo = stockData[0];
        const symbol = companyInfo.symbol;

        const dailyStock = stockData[1];
        const dailyClosingPrices = dailyStock.map(price => price.marketAverage);
        console.log(dailyClosingPrices);

        const monthlyStock = stockData[2];
        const monthlyClosingPrices = monthlyStock.map(price => price.close);

        const yearlyStock = stockData[3];
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
        if(this.props.stock.length == 0) {
            return <div> No stocks yet.. </div>;
        }
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

function mapStateToProps(state) {
    return { stock: state.stock,
             auth: state.auth };
}

export default connect(mapStateToProps)(StockList);