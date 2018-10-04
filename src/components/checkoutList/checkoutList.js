import React, { Component } from 'react';
import './checkoutList.css';
import CheckoutItem from '../checkoutItem/checkoutItem.js';


class CheckoutList extends Component {
  render() {
    return (
      <tbody>
        {
          this.props.products.map(
            (product, key) => <CheckoutItem title={product.name} price={product.price} description={product.description} key={key} id={product.id} addItem={this.props.addItem} product={product} removeItem={this.props.removeItem} />
          )
        }
      </tbody>
    );
  }
}

export default CheckoutList;
