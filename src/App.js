import React, { Component } from 'react';
import './App.css';
import products from './static/data/products.js';
import Navbar from './components/navbar/navbar.js';
import { Switch, Route} from 'react-router-dom';
import Home from './components/views/home/home.js';
import Checkout from './components/views/checkout/checkout.js';
import firebase from './firebase';

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

    this.getProducts();
  }

  getProducts = (func) => {
    const prodsRef = firebase.database().ref('cart');
    prodsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      if (items != null) {
        for (let index in items) {
          newState.push(items[index]);
        }
      }
      this.setState({
        cart: newState
      });
      return newState;
    });
  }

  // calculate total and return fixed number to two decimals
  calcTotal = () => {
    let total = 0;

    // loop through cart in state and add all prices
    for (let i = 0; i < this.state.cart.length; i++) {
      total += this.state.cart[i].price;
    }

    // set new total to state
    this.setState({
      total: total.toFixed(2)
    });
  }

  // add item on button click
  addItem = (id) => {
    // get current cart
    let items = this.state.cart;

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        // push to cart variable
        items.push(products[i]);
        break;
      }
    }

    // set state to current cart
    this.setState({
      cart: items
    });

    this.calcTotal();

    // add new product to firebase
    firebase.database().ref('cart').set(items);
    this.getProducts();
  }

  removeItem = (id) => {
    console.log(id);
  }


  render() {
    return (
      <div className="App">
        <Navbar total={this.state.total} />
        <Switch>
          <Route exact path='/' render={() => <Home addItem={this.addItem} products={this.state.products} />}></Route>
          <Route exact path='/checkout' render={() => <Checkout products={this.state.cart} total={this.state.total} removeItem={this.removeItem} />}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
