import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStock } from '../actions/index';

class SearchBar extends Component {
    //initialize component state
    constructor(props) {
        super(props);

        this.state = { term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        //we need to go and fetch stock data
        this.props.fetchStock(this.state.term);
        this.setState({ term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get information about your stocks"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

//when action creator is called, bindActionCreators makes sure action flows down into middleware and reducer
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchStock}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);