//feature 1

import React, { Component } from 'react';
import './App.css';
import data from "./data.json"
import Products from './components/Products'
import Filter from './components/Filter';

console.log(data)

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      edition: "",
      sort: "",
    }
  }
  sortProducts = (event) => {
    //Implement sort
    const sort = event.target.value;
    console.log(sort)
    if (event.target.value === "") {
      this.setState({
        sort: sort,
        products: data.products
      })
    } else {
      this.setState({
        sort: sort,
        products: this.state.products
          .slice()
          .sort((a, b) => (
            sort === "Lowest" ?
              ((a.price > b.price) ? 1 : -1) :
              sort === "Highest" ?
                ((a.price < b.price) ? 1 : -1) :
                ((a._id < b._id) ? 1 : -1)
          ))
      })

    }



  }

  filterProducts = (event) => {
    if (event.target.value === "") {
      this.setState({
        edition: event.target.value, products: data.products
      })
    } else {
      this.setState({
        edition: event.target.value,
        products: data.products.filter(product => product.edition.indexOf(event.target.value) >= 0),
      })

    }



  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Buy Games at Cheapest Rate</a>
          <a style={{ float: "right" }}>ADMIN</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts} />
              Games List
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">
              Cart Items

            </div>

          </div>

        </main>
        <footer>
          All Rights Reserved
        </footer>
      </div>
    );

  }
}



export default App;
