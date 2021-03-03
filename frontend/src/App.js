import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import {
    passwordAnswer, userAnswer
} from "./redux/actions";

import Home from './Home';
import Login from './Login';
import Profile from "./Profile";
import Services from "./Services";

import Transport from "./services/Transport";
import Restaurants from "./services/Restaurants";
import RoomServices from "./services/RoomServices";

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";


class App extends Component {

    render() {

        return (

            <Router>

                <Route path="/" exact component={Home} />
                <Route path="/login/" render={(props) => (

                    <Login {...props}
                           clients={this.props.clients}
                           login = {this.props.login}
                           onPasswordAnswer={(answer) => {
                               this.props.dispatch(passwordAnswer(answer))}
                           }
                           onUserAnswer={(answer) => {
                               this.props.dispatch(userAnswer(answer))}
                           }
                    />
                )}/>

                <Route path="/profile/" component={Profile} />
                <Route path="/services/" exact component={Services} />

                <Route path="/services/transport/" component={Transport} />
                <Route path="/services/restaurants/" component={Restaurants} />
                <Route path="/services/room_services/" component={RoomServices} />


            </Router>

        );

    }
}

function mapStateToProps(state){
  return{
    ...state
  };
}

export default connect(mapStateToProps)(App);

