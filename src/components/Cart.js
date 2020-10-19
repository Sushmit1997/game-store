import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        const { cartItems } = this.props
        let total = 0;
        return (
            <div>
                {cartItems.length === 0 ? <div className="cart cart-header">Cart Is Empty</div> :
                    <div className="cart cart-header"> You have {cartItems.length} items in the cart</div>}
                <div className="cart">
                    <ul className="cart-items">
                        {console.log(cartItems)}
                        {cartItems.map(item => (
                            <li key={item._id}>
                                <div>
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div>{item.title}</div>
                                <div className="right">
                                    ${item.price} x {item.count}{" "}
                                    <button className="remove-button" onClick={() => this.props.removeFromCart(item)}>Remove</button>
                                </div>


                            </li>
                        ))}
                    </ul>
                    {cartItems.length !== 0 && (
                        <div className="cart">
                            <div className="total">
                                <h3>Total:{" "} ${cartItems.reduce((a, c) => a + c.price * c.count, 0)}</h3>
                            </div>
                            <div className="proceed-container">
                                <button className="button-primary">Proceed</button>
                            </div>

                        </div>

                    )}


                </div>
            </div>
        )
    }
}
