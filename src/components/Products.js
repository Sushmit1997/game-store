import React, { Component } from 'react'


export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(item => (
                        <li key={item._id}>
                            <div className="products">
                                <a href={"#" + item._id}>
                                    <img className="product-image" src={item.image} alt={item.title}>
                                    </img>
                                    <p>
                                        {item.title}
                                    </p>
                                    <div className="product-price">
                                        <div>
                                            ${item.price}
                                        </div>
                                        <button className="button-primary" onClick={() => this.props.addToCart(item)}>
                                            Add to Cart

                                         </button>

                                    </div>
                                </a>


                            </div>

                        </li>
                    ))}
                </ul>

            </div >
        )
    }
}
