import React, {Component} from "react";
import "./App.css";
import {connect} from "react-redux";
import {
    userAnswer,
    submit,
    endSession,
    updateProfile,
    changeRestaurant,
    changeRoomServices,
    changeTransport,
    conditions
} from "./redux/actions";

import Home from "./Home";
import Login from "./Login/Login";
import Profile from "./Profile";
import Services from "./Services";
import Transports from "./services/Transport/Transports";
import Restaurants from "./services/Restaurants/Restaurants";
import RoomServices from "./services/Room Service/RoomServices";
import ShowRestaurant from "./services/Restaurants/ShowRestaurant";
import ShowRoomServices from "./services/Room Service/ShowRoomServices";
import ShowTransport from "./services/Transport/ShowTransport";

import {BrowserRouter as Router, Route} from "react-router-dom";


class App extends Component {

    constructor(props) {
        super(props);
        this.timerlog = null;
        this.submit = this.submit.bind(this);
        this.update = this.update.bind(this);
        this.conditions = this.conditions.bind(this);
    }

    submit(){
        this.props.dispatch(submit(this.props.clients));
        let alert = document.querySelector('#alert');
        alert.style.visibility = "visible"
        this.timerlog = setTimeout(() => alert.style.visibility = 'hidden', 5000)
    }

    componentWillUnmount() {
        clearTimeout(this.timerlog);
    }

    update(){
        this.props.dispatch(updateProfile(this.props.login.id-1, this.props.clients[this.props.login.id-1]));
    }

    conditions(){
        this.props.dispatch(conditions());
    }

    render() {

        return (
            <div>
                <Router>

                    <Route
                        exact path="/"
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
                                submitFunction={this.submit}
                            />
                        )}
                    >
                    </Route>


                    <Route
                        path="/profile/"

                        render={(props) => (
                            <Profile
                                {...props}
                                conditions={this.conditions}
                                client={this.props.clients[this.props.login.id-1]}
                                login={this.props.login}
                                update={this.update}
                                endSession={ () => {
                                    this.props.dispatch(endSession());
                                }}
                            />
                        )}
                    />

                    <Route path="/services/" component={Services}/>

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
