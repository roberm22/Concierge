import React from 'react';

import CartProducts from './CartProducts';
import { formatNumber } from '../../utils';
import Header from "../../components/shared/header";
import Footer from "../../components/shared/footer";
import NavBar from "../../../NavBar";


export default class Cart extends React.Component {

    render() {

        let itemCount = this.props.cartItems.reduce((total, product) => total + product.quantity, 0);
        let total = this.props.cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);

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
                                    <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                    <p className="mb-1">Total Payment</p>
                                    <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                                    <hr className="my-4"/>
                                    <div className="text-center">
                                        <button type="button" className="btn btn-primary mb-2"
                                                onClick={() => this.props.clearCart}>CHECKOUT
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