import React, { Component } from 'react';
import './App.css';
import products from './static/data/products.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: undefined,
      cart: undefined,
      products: undefined
    }
  }

  componentWillMount() {
    this.setState({
      total: 0,
      cart: [],
      products: products
    });
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
