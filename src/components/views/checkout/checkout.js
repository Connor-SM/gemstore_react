import React, { Component } from 'react';
import './checkout.css';
import CheckoutList from '../../checkoutList/checkoutList.js';


class Checkout extends Component {
  render() {
    return (
      <div className="Checkout">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product</th>
                    <th scope="col" colSpan="2">Price</th>
                  </tr>
                </thead>
                <CheckoutList products={this.props.products} removeItem={this.props.removeItem} />
                <tfoot>
                  <tr>
                    <th scope="col" colSpan="2">Total: </th>
                    <th scope="col" colSpan="2">${this.props.total}</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
