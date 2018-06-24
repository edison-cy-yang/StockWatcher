import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class StockList extends Component {
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

            </tbody>
            </table>
        );
    }
}

function mapStateToProps({ stock }) {
    return { stock };
}

export default connect(mapStateToProps)(StockList);