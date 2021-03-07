import React, {Component} from "react";
import "./App.css";
import {connect} from "react-redux";
import {
    passwordAnswer,
    userAnswer,
    conditionsAccepted,
    changeRestaurant,
    changeRoomServices,
    changeTransport
} from "./redux/actions";

import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Services from "./Services";
import Welcome from "./Welcome";
import Transports from "./services/Transports";
import Restaurants from "./services/Restaurants";
import RoomServices from "./services/RoomServices";
import ShowRestaurant from "./services/ShowRestaurant";
import ShowRoomServices from "./services/ShowRoomServices";
import ShowTransport from "./services/ShowTransport";

import {BrowserRouter as Router, Route} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    {(this.props.view === null) ? //esto es para que se vea solo el welcome hasta que no se aceptan las condiciones
                        <Home/> : null}
                    {(this.props.view === "Welcome") ?
                        <Welcome login={this.props.login} conditionsAccepted={this.conditionsAccepted}/> : null}

                    <Route
                        path="/login/"
                        render={(props) => (
                            (this.props.view === null) ? <Login
                                {...props}
                                clients={this.props.clients}
                                login={this.props.login}
                                onPasswordAnswer={(answer) => {
                                    this.props.dispatch(passwordAnswer(answer));
                                }}
                                onUserAnswer={(answer) => {
                                    this.props.dispatch(userAnswer(answer));
                                }}
                            /> : null
                        )}
                    />

                    <Route
                        path="/profile/"
                        render={(props) => (
                            (this.props.view === null) ? <Profile
                                {...props}
                                client={this.props.clients[this.props.currentClient]}
                            /> : null
                        )}
                    />
                    {(this.props.view === null) ?
                    <Route path="/services/" exact component={Services}/>:null}

                    <Route
                        path="/services/transport/"
                        render={(props) => (
                            (this.props.view === null) ?
                                <Transports
                                {...props}
                                transports={this.props.transports}
                                onChangeTransport={(answer) => {
                                    this.props.dispatch(changeTransport(answer));
                                }}
                            /> : null
                        )}
                    />

                    <Route
                        path="/services/show_transport/"
                        render={(props) => (
                            (this.props.view === null) ?
                                <ShowTransport
                                    {...props}
                                    currentTransport={
                                        this.props.transports[this.props.currentTransport]
                                    }
                                /> : null
                        )}
                    />

                    <Route
                        path="/services/restaurants/"
                        render={(props) => (
                            (this.props.view === null) ? <Restaurants
                                {...props}
                                restaurants={this.props.restaurants}
                                onChangeRestaurant={(answer) => {
                                    this.props.dispatch(changeRestaurant(answer));
                                }}
                            /> : null
                        )}
                    />

                    <Route
                        path="/services/room_services/"
                        render={(props) => (
                            (this.props.view === null) ? <RoomServices
                                {...props}
                                roomServices={this.props.roomServices}
                                onChangeRoomServices={(answer) => {
                                    this.props.dispatch(changeRoomServices(answer));
                                }}
                            /> : null
                        )}
                    />

                    <Route
                        path="/services/show_restaurant/"
                        render={(props) => (
                            (this.props.view === null) ? <ShowRestaurant
                                {...props}
                                currentRestaurant={
                                    this.props.restaurants[this.props.currentRestaurant]
                                }
                            /> : null
                        )}
                    />
                    <Route
                        path="/services/show_room_services/"
                        render={(props) => (
                            (this.props.view === null) ? <ShowRoomServices
                                {...props}
                                currentRoomServices={
                                    this.props.roomServices[this.props.currentRoomServices]
                                }
                            /> : null
                        )}
                    />
                </Router>
            </div>
        );
    }

    conditionsAccepted = () => {
        this.props.dispatch(conditionsAccepted());
    }
}

function mapStateToProps(state) {
    return {
        ...state,
    };
}

export default connect(mapStateToProps)(App);
