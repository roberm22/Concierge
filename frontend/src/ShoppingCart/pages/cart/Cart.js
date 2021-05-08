import React from 'react';

import CartProducts from './CartProducts';
import {formatNumber} from '../../utils';
import Header from "../../components/shared/header";
import Footer from "../../components/shared/footer";
import NavBar from "../../../Views/NavBar";
import {NavLink} from "react-router-dom";


export default class Cart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            itemCount: this.props.cartItems.reduce((total, product) => total + product.quantity, 0),
            total: this.props.cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2),
            totalPoints: this.props.cartItems.reduce((totalPoints, product) => totalPoints + product.hotelPoints * product.quantity, 0).toFixed(2),
            payPoints: false,
            points: this.props.login.isLogged ? this.props.client.points : 0
        };
    }

    render() {

        return (

            <>
                <NavBar points={this.state.points} isLogged={this.props.login.isLogged}/>
                <Header isShow={this.props.isShow} showBoth={true}/>
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
                                        payPoints={this.state.payPoints}
                                        cartItems={this.props.cartItems}
                                        increase={this.props.increase}
                                        decrease={this.props.decrease}
                                        removeProduct={this.props.removeProduct}
                                        changeCart={(cart = this.props.cartItems) => {
                                            this.setState({
                                                itemCount: cart.reduce((total, product) => total + product.quantity, 0),
                                                total: cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2),
                                                totalPoints: cart.reduce((totalPoints, product) => totalPoints + product.hotelPoints * product.quantity, 0).toFixed(2),
                                                points: this.props.login.isLogged ? this.props.client.points : 0
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
                                    <h3 className="m-0 txt-right">
                                        {this.state.payPoints ?
                                            this.state.totalPoints + ' HP' :
                                            formatNumber(this.state.total)}
                                    </h3>
                                    <hr className="my-4"/>
                                    <div className="text-center">

                                        {this.props.login.isLogged ?
                                            this.state.payPoints ?
                                                <button type="button" className="btn btn-primary mb-2"
                                                        disabled={this.state.totalPoints > this.state.points}
                                                        onClick={() => {
                                                            this.props.update(parseFloat(this.state.totalPoints), true)
                                                            this.setState({
                                                                points: this.state.points - this.state.totalPoints
                                                            });
                                                            alert("Successful transaction, you will receive your order soon!")
                                                        }}>
                                                    Pay with points
                                                </button>
                                                :
                                                <button type="button" className="btn btn-primary mb-2"
                                                        onClick={() => {
                                                            this.props.update(parseFloat(this.state.total), false)
                                                            alert("Added to your bill, you will receive your order soon!")
                                                        }}>
                                                    Add to the room bill
                                                </button>
                                            :
                                            <NavLink to="/login/"
                                                     style={{color: 'white', textDecoration: 'none'}}>
                                                <button type="button" className="btn btn-primary mb-2">
                                                    {this.state.payPoints ? 'Pay with points' : 'Add to the room bill'}
                                                </button>
                                            </NavLink>
                                        }

                                        <button type="button" className="btn btn-outlineprimary btn-sm"
                                                onClick={() => this.props.clearCart()}>CLEAR
                                        </button>

                                    </div>

                                </div>
                                <div className="custom-control custom-switch"
                                     style={{
                                         justifyContent: 'flex-end',
                                         alignItems: 'center',
                                         display: 'flex',
                                         flex: 1,
                                         paddingRight: '15px'
                                     }}>
                                    <input type="checkbox" class="custom-control-input" id="customSwitch1"
                                           onClick={() => {
                                               this.setState({payPoints: !this.state.payPoints})
                                           }}
                                    />
                                    <label class="custom-control-label" for="customSwitch1">Pay with Hotel
                                        Points</label>
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