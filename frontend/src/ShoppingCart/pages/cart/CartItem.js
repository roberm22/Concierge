import React from 'react';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../components/icons/ShoppingIcons'

import { formatNumber } from '../../utils';


export default class CartItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.product.quantity
        };
    }


    render() {

        return (
            <div className="row no-gutters py-2">
                <div className="col-sm-2 p-2">
                    <img
                        alt={this.props.product.name}
                        style={{margin: "0 auto", maxHeight: "50px"}}
                        src={this.props.product.photo} className="img-fluid d-block"/>
                </div>
                <div className="col-sm-4 p-2">
                    <h5 className="mb-1">{this.props.product.name}</h5>
                    <p className="mb-1">Price: {formatNumber(this.props.product.price)} </p>

                </div>
                <div className="col-sm-2 p-2 text-center ">
                    <p className="mb-0">Qty: {this.props.product.quantity}</p>
                </div>
                <div className="col-sm-4 p-2 text-right">
                    <button
                        onClick={() => {
                            this.props.increase(this.props.product)
                            this.props.changeCart()
                            this.setState({quantity: this.state.quantity++})
                        }}
                        className="btn btn-primary btn-sm mr-2 mb-1">
                        <PlusCircleIcon width={"20px"}/>
                    </button>

                    {
                        this.props.product.quantity > 1 &&
                        <button
                            onClick={() => {
                                this.props.decrease(this.props.product)
                                this.props.changeCart()
                                this.setState({quantity: this.state.quantity--})
                            }}
                            className="btn btn-danger btn-sm mb-1">
                            <MinusCircleIcon width={"20px"}/>
                        </button>
                    }

                    {
                        this.props.product.quantity === 1 &&
                        <button
                            onClick={() => {
                                this.props.removeProduct(this.props.product)
                                this.props.changeCart()
                            }}
                            className="btn btn-danger btn-sm mb-1">
                            <TrashIcon width={"20px"}/>
                        </button>
                    }

                </div>
            </div>
        );
    }
}
