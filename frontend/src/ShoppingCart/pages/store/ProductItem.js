import React from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../../utils';

export default class ProductItem extends React.Component {

    render() {

        let isInCart = product => {
            return !!this.props.cartItems.find(item => item.id === product.id);
        }

        return (
            <div className="card card-body">
                <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid"
                     src={this.props.product.photo} alt=""/>
                <p>{this.props.product.name}</p>
                <h3 className="text-left">{formatNumber(this.props.product.price)}</h3>
                <div className="text-right">
                    <Link to="/" className="btn btn-link btn-sm mr-2">Details</Link>

                    {
                        isInCart(this.props.product) &&
                        <button
                            onClick={() => this.props.increase(this.props.product)}
                            className="btn btn-outline-primary btn-sm">Add more</button>
                    }

                    {
                        !isInCart(this.props.product) &&
                        <button
                            onClick={() => this.props.addProduct(this.props.product)}
                            className="btn btn-primary btn-sm">Add to cart</button>
                    }

                </div>
            </div>
        );
    }
}