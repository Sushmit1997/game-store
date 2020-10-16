//feature 1

import React, { Component } from 'react';
import './App.css';
import data from "./data.json"
import Products from './components/Products'

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
  //   let template = data.map((item) => {
  //   return (`<div id=${item.id}> Name:${item.title}  </div>`)

  // })
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
