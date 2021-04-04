import React from 'react';

import CartProducts from './CartProducts';
import { formatNumber } from '../../utils';
import Header from "../../components/shared/header";
import Footer from "../../components/shared/footer";
import NavBar from "../../../Views/NavBar";


export default class Cart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            itemCount: this.props.cartItems.reduce((total, product) => total + product.quantity, 0),
            total: this.props.cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2),
            totalPoints: this.props.cartItems.reduce((totalPoints, product) => totalPoints + product.hotelPoints * product.quantity, 0).toFixed(2),
        };
    }

    render() {

        return (

            <>
                <NavBar/>
                <Header/>
                <div>
                    <div className="text-center mt-5">
                        <h1>Cart</h1>
                        <p>This is the Cart Page.</p>
                    </div>

                    <div className="row no-gutters justify-content-center">
                        <div className="col-sm-9 p-3">
                            {
                                this.props.cartItems.length > 0 ?
                                    <CartProducts
                                        cartItems={this.props.cartItems}
                                        increase={this.props.increase}
                                        decrease={this.props.decrease}
                                        removeProduct={this.props.removeProduct}
                                        changeCart = { (cart = this.props.cartItems) => {
                                            this.setState({
                                                itemCount: cart.reduce((total, product) => total + product.quantity, 0),
                                                total: cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2),
                                                totalPoints: cart.reduce((totalPoints, product) => totalPoints + product.hotelPoints * product.quantity, 0).toFixed(2)
                                            })
                                        }}

                                    /> :
                                    <div className="p-3 text-center text-muted">
                                        Your cart is empty
                                    </div>
                            }


                        </div>
                        {
                            this.props.cartItems.length > 0 &&
                            <div className="col-sm-3 p-3">
                                <div className="card card-body">
                                    <p className="mb-1">Total Items</p>
                                    <h4 className=" mb-3 txt-right">{this.state.itemCount}</h4>
                                    <p className="mb-1">Total Payment</p>
                                    <h3 className="m-0 txt-right">{formatNumber(this.state.total)}</h3>
                                    <hr className="my-4"/>
                                    <div className="text-center">

                                        <button type="button" className="btn btn-primary mb-2"
                                                onClick={() => this.props.clearCart}> Add to the room bill

                                        </button>

                                        <button type="button" className="btn btn-outlineprimary btn-sm"
                                                onClick={() => this.props.clearCart}>CLEAR
                                        </button>

                                    </div>

                                </div>
                            </div>
                        }

                    </div>
                </div>
                <Footer/>
            </>

        );
    }
}