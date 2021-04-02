import React from 'react';

import CartProducts from './CartProducts';
import { formatNumber } from '../../utils';
import Header from "../../components/shared/header";
import Footer from "../../components/shared/footer";
import NavBar from "../../../NavBar";


export default class Cart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            itemCount: this.props.cartItems.reduce((total, product) => total + product.quantity, 0),
            itemCount2: this.props.cartItems.reduce((total2, product) => total2 + product.quantity, 0),
            total: this.props.cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2),
            total2: this.props.cartItems.reduce((total2, product) => total2 + product.hotelPoints * product.quantity, 0).toFixed(2)

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
                                                itemCount2: cart.reduce((total2, product) => total2 + product.quantity, 0),
                                                total: cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2),
                                                total2: cart.reduce((total2, product) => total2 + product.hotelPoints * product.quantity, 0).toFixed(2)
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
                                    Hotel Points: <h3 className="m-0 txt-right">{this.state.total2}</h3>
                                    <hr className="my-4"/>
                                    <div className="text-center">
                                        <button type="button" className="btn btn-primary mb-2"
                                                onClick={() => this.props.clearCart}>GO TO PAY
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