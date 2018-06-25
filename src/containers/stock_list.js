import React, { Component } from 'react';
import { connect } from 'react-redux';

class StockList extends Component {
    renderStock(stockData) {
        const name = stockData["Meta Data"]["2. Symbol"];
        console.log(stockData["Time Series (Daily)"]);
        stock = stockData["Time Series (Daily)"];
        keys = Object.keys(stock);
        const closingPrices = [];
        keys.forEach( key => {
            closingPrices.push(stock[key]["4. close"]);
        })
        return (
            <tr key={name}>
                <td>
                    {name}
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