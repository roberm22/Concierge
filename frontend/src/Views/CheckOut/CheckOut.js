import React from "react";
import NavBar from "../../Views/NavBar";
import "./CheckOut.css";


export default class CheckOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 0
        };
    }


    render() {
        let points;
        if (this.props.login.isLogged) {
            points = this.props.client.profile.points;
        } else {
            points = 0;
        }
        return (
            <div>
                <NavBar
                    points={this.state.points + points}
                    isLogged={this.props.login.isLogged}
                />

                <section className="payment-form dark">
                    <div className="container">
                        <div className="block-heading">
                            <h2>Payment</h2>
                            <p>When the time comes for you to depart, we will see you off with a smile and look forward to seeing you again soon!</p>
                        </div>
                        <form>
                            <div className="products">
                                <h3 className="title">Checkout</h3>
                                <div>Total<span className="price">{this.props.client.profile.bill}€</span>
                                </div>
                            </div>
                            <div className="card-details">
                                <h3 className="title">Credit Card Details</h3>
                                <div className="row">
                                    <div className="form-group col-sm-7">
                                        <label >Card Holder</label>
                                        <input id="card-holder" type="text" className="form-control"
                                               placeholder="Card Holder" aria-label="Card Holder"
                                               aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="form-group col-sm-5">
                                        <label >Expiration Date</label>
                                        <div className="input-group expiration-date">
                                            <input type="text" className="form-control" placeholder="MM" aria-label="MM"
                                                   aria-describedby="basic-addon1"/>
                                                <span className="date-separator">/</span>
                                                <input type="text" className="form-control" placeholder="YY" aria-label="YY"
                                                       aria-describedby="basic-addon1"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-8">
                                        <label >Card Number</label>
                                        <input id="card-number" type="text" className="form-control"
                                               placeholder="Card Number" aria-label="Card Holder"
                                               aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label >CVC</label>
                                        <input id="cvc" type="text" className="form-control" placeholder="CVC"
                                               aria-label="Card Holder" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <button type="button" className="btn btn-primary btn-block">Proceed</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
    );
    }
    }
