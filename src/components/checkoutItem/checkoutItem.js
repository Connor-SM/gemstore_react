import React, { Component } from 'react';
import './checkoutItem.css';


class CheckoutItem extends Component {
  render() {
    return (
      <tr>
        <th scope="col">1</th>
        <td>{this.props.title}</td>
        <td>${this.props.price}</td>
        <td><button className="btn btn-danger" onClick={() => this.props.removeItem(this.props.id)}>X</button></td>
      </tr>
    );
  }
}

export default CheckoutItem;
