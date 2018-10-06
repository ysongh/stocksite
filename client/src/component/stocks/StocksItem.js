import React, { Component } from 'react';
import { connect } from 'react-redux';

class StocksItem extends Component{
    render(){
        const {stock} = this.props;
        
        return(
            <div className="card card bg-light text-dark mb-1 p-2">
                <div className="row">
                    <div className="col-md-4">
                        <h5 className="d-inline">{stock.symbol}</h5>
                    </div>
                    <div className="col-md-4">
                        <p className="d-inline">Stocks - {stock.quantity}</p>
                    </div>
                    <div className="col-md-4">
                        <p className="d-inline">Price - ${stock.price.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null)(StocksItem);