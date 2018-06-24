import React, { Component } from 'react';
import { connect } from 'react-redux';

class StockList extends Component {
    renderStock(stockData) {
        console.log(stockData["Meta Data"]["2. Symbol"]);
        return (
            <tr>
                <td>{stockData["Meta Data"]["2. Symbol"]}</td>
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