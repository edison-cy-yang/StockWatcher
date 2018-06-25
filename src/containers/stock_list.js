import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

class StockList extends Component {
    renderStock(stockData) {
        const name = stockData["Meta Data"]["2. Symbol"];
        console.log(stockData["Time Series (Daily)"]);
        var stock = stockData["Time Series (Daily)"];
        var keys = Object.keys(stock);
        const closingPrices = [];
        keys.forEach( key => {
            closingPrices.push(stock[key]["4. close"]);
        })
        return (
            <tr key={name}>
                <td>
                    {name}
                </td>
                <td>
                    <Sparklines height={120} width={180} data={closingPrices}>
                        <SparklinesLine color="red" />
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