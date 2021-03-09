import React, {Component} from "react";
import "./App.css";
import {connect} from "react-redux";
import {
    userAnswer,
    submit,
    endSession,
    conditionsAccepted,
    changeRestaurant,
    changeRoomServices,
    changeTransport
} from "./redux/actions";

import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Services from "./Services";
import Transports from "./services/Transports";
import Restaurants from "./services/Restaurants";
import RoomServices from "./services/RoomServices";
import ShowRestaurant from "./services/ShowRestaurant";
import ShowRoomServices from "./services/ShowRoomServices";
import ShowTransport from "./services/ShowTransport";

import {BrowserRouter as Router, Route} from "react-router-dom";


class App extends Component {

    miStorage = localStorage;

    render() {

        return (
            <div>
                <Router>

                    <Route
                        path="/"
                        render={() => (
                            <Home/>
                        )}
                    />

                    <Route
                        path="/login/"
                        render={(props) => (
                            <Login
                                {...props}
                                clients={this.props.clients}
                                login={this.props.login}
                                onUserAnswer={(user = this.props.login.userAnswer, password = this.props.login.passwordAnswer) => {
                                    this.props.dispatch(userAnswer(user, password));
                                }}
                                submitFunction={ () => {
                                    this.props.dispatch(submit(this.props.clients));
                                }}
                            />
                        )}
                    >
                    </Route>


                    <Route
                        path="/profile/"

                        render={(props) => (
                            <Profile
                                {...props}
                                client={this.props.clients[this.props.login.id-1]}
                                login={this.props.login}
                                endSession={ () => {
                                    this.props.dispatch(endSession());
                                }}
                            />
                        )}
                    />

                    <Route path="/services/" exact component={Services}/>

                    <Route
                        path="/services/transport/"
                        render={(props) => (
                            <Transports
                                {...props}
                                transports={this.props.services.transports}
                                onChangeTransport={(answer) => {
                                    this.props.dispatch(changeTransport(answer));
                                }}
                            />
                        )}
                    />

                    <Route
                        path="/services/transport/show_transport/"
                        render={(props) => (
                            <ShowTransport
                                {...props}
                                currentTransport={
                                    this.props.services.transports[this.props.currentService]
                                }
                            />
                        )}
                    />

                    <Route
                        path="/services/restaurants/"
                        render={(props) => (
                            <Restaurants
                                {...props}
                                restaurants={this.props.services.restaurants}
                                onChangeRestaurant={(answer) => {
                                    this.props.dispatch(changeRestaurant(answer));
                                }}
                            />
                        )}
                    />

                    <Route
                        path="/services/restaurants/show_restaurant/"
                        render={(props) => (
                            <ShowRestaurant
                                {...props}
                                currentRestaurant={
                                    this.props.services.restaurants[this.props.currentService]
                                }
                            />
                        )}
                    />

                    <Route
                        path="/services/room_services/"
                        render={(props) => (
                            <RoomServices
                                {...props}
                                roomServices={this.props.services.roomServices}
                                onChangeRoomServices={(answer) => {
                                    this.props.dispatch(changeRoomServices(answer));
                                }}
                            />
                        )}
                    />


                    <Route
                        path="/services/room_services/show_room_services/"
                        render={(props) => (
                            <ShowRoomServices
                                {...props}
                                currentRoomServices={
                                    this.props.services.roomServices[this.props.currentService]
                                }
                            />
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

/*
{(this.props.view === null) ? //esto es para que se vea solo el welcome hasta que no se aceptan las condiciones
   <Home/> : null}
{(this.props.view === "Welcome") ?
   <Welcome login={this.props.login} conditionsAccepted={this.conditionsAccepted}/> : null}

(this.props.view === null) ? compenente : null

 */



function mapStateToProps(state) {
    return {
        ...state,
    };
}

export default connect(mapStateToProps)(App);
