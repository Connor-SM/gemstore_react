import React, { Component } from 'react'
import ReviewList from './reviewList/reviewList.js';

export default class Reviews extends Component {
  render() {
    return (
      <div>
        <ReviewList product={this.props.product} />
      </div>
    )
  }
}
