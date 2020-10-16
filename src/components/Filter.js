import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">

                <div className="filter-result">
                    {this.props.count} Products
                </div>
                <div className="filter-sort">
                    Order
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option value="">Latest</option>
                        <option value="Lowest">Lowest</option>
                        <option value="Highest">Highest</option>


                    </select>

                </div>
                <div className="filter-edition">
                    Filter
                    <select value={this.props.edition} onChange={this.props.filterProducts}>
                        <option value="">All</option>
                        <option value="Standard">Standard</option>
                        <option value="Deluxe">Deluxe</option>
                        <option value="Ultimate">Ultimate</option>
                    </select>


                </div>
            </div>
        )
    }
}
