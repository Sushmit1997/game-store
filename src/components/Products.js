import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Modal from 'react-modal'
import Zoom from 'react-reveal/Zoom'
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions'

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null
        };
    }

    componentDidMount() {

    }

    openModal = (item) => {
        this.setState({ item });
    };
    closeModal = (item) => {
        this.setState({ item: null })
    }
    render() {
        const { item } = this.state;
        return (
            <div>
                <Fade bottom cascade>
                    {!this.props.products ? <div>Loading...</div> :
                        <ul className="products">
                            {this.props.products.map(item => (
                                <li key={item._id}>
                                    <div className="products">
                                        <a href={"#" + item._id} >
                                            <img className="product-image" onClick={() => this.openModal(item)} src={item.image} alt={item.title}>
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
                    }

                </Fade>
                {this.state.item &&
                    <Modal isOpen={true} onRequestClose={this.closeModal}>
                        <Zoom>
                            <button className="close-modal" onClick={this.closeModal}>x</button>
                            <div className="product-details">
                                <img src={item.image} alt={item.title}></img>
                                <div className="product-details-description">
                                    <p>
                                        <strong>{item.title}</strong>
                                    </p>
                                    <p>
                                        <strong>{item.description}</strong>
                                    </p>
                                    <p>
                                        Available Editions
                                        {item.edition.map((x) => {
                                        return (
                                            <span>
                                                {" "}
                                                <button className="button-primary">{x}</button>
                                            </span>
                                        )

                                    })}
                                    </p>
                                    <div className="product.price">
                                        <div>${item.price}</div>
                                        <button className="button-primary" onClick={() => {
                                            this.props.addToCart(item);
                                            this.closeModal()
                                        }}>Add to Cart</button>

                                    </div>


                                </div>

                            </div>
                        </Zoom>
                    </Modal>}

            </div >
        )
    }
}

export default connect((state) => ({ item: state.products.items }), { fetchProducts })(Products);
