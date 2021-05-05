import React from 'react';
import {Link, Redirect} from "react-router-dom";
import './profile.css'
import update from 'react-addons-update';
import NavBar from "../NavBar";
import vip from "../../assets/images/vip.png";
import premium from "../../assets/images/premium.png";

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {...this.props.client};
        this.timer = null;

    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        if (this.props.login.isLogged) {
            return (
                <div>
                    {(this.props.login.conditionsAccepted) ?
                        (<div className={"profileMain"}>
                            <NavBar login={this.props.login}/>
                            <div className="information">
                                <div className="row gutters">
                                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="account-settings">
                                                    <div className="user-profile">
                                                        <div className="user-avatar">

                                                            {this.props.client.tierVIP === 3 ?
                                                                <img alt={"Vip"} src={vip}/> : null}
                                                            {this.props.client.tierVIP === 2 ?
                                                                <img alt={"Premium"}
                                                                     src={premium}/> : null}
                                                            {this.props.client.tierVIP === 3 ? null :
                                                                <Link to="/prices">
                                                                    <button className={"btn btn-info"}>
                                                                        Become VIP
                                                                    </button>
                                                                </Link>
                                                            }
                                                        </div>
                                                        <h5 className="user-name">{this.props.client.name}</h5>
                                                        <h6 className="user-email">{this.props.client.stay}</h6>
                                                    </div>
                                                    <div className="about">
                                                        <h5>Points</h5>
                                                        <p>{this.props.client.points}</p>
                                                    </div>
                                                    <div className="about">
                                                        <h5>Bill</h5>
                                                        <p>{this.props.client.bill}€</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="row gutters">
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <h6 className="mb-2 text-primary">Personal Details</h6>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <div className="form-group">
                                                            <label for="fullName">DNI</label>
                                                            <input readOnly type="text" className="form-control"
                                                                   id="dni"
                                                                   placeholder={this.props.client.dni}/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <div className="form-group">
                                                            <label for="eMail">Room</label>
                                                            <input readOnly type="text" className="form-control"
                                                                   id="room"
                                                                   placeholder={this.props.client.room}/>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <div className="form-group">
                                                            <label for="phone">Email</label>
                                                            <input type="email" id="email" className="form-control"
                                                                   placeholder={this.state.email}
                                                                   value={this.state.email}
                                                                   onChange={(e) => {
                                                                       let newState = update(this.state, {
                                                                           email: {$set: e.target.value}
                                                                       });
                                                                       this.setState(newState);
                                                                   }
                                                                   }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <div className="form-group">
                                                            <label for="website">Phone</label>
                                                            <input type="text" className="form-control" id="phone"
                                                                   placeholder={this.state.phone}
                                                                   value={this.state.phone}
                                                                   onChange={(e) => {
                                                                       let newState = update(this.state, {
                                                                           phone: {$set: e.target.value}
                                                                       });
                                                                       this.setState(newState);
                                                                   }
                                                                   }
                                                            />
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="row gutters">
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <div className="text-right">
                                                            <button type="button" id="submit" name="submit"
                                                                    className="btn btn-secondary"
                                                                    onClick={this.props.endSession}>
                                                                Logout
                                                            </button>
                                                            <button type="button" className="btn btn-primary"
                                                                    onClick={() => this.props.update(this.state)}>
                                                                Update
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <br/>
                                <Link to="/checkOut/">
                                    <button type="button" className="btn btn-primary btn-lg btn-block">
                                        CheckOut
                                    </button>
                                </Link>
                            </div>


                        </div>)
                        :
                        (<Redirect to="/welcome/"/>)}

                </div>

            );
        } else {
            return (<Redirect to="/login/"/>);
        }
    }
}
