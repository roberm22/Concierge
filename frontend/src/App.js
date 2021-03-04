import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import {
    passwordAnswer, userAnswer, conditionsAccepted
} from "./redux/actions";

import Home from './Home';
import Login from './Login';
import Profile from "./Profile";
import Services from "./Services";
import Welcome from "./Welcome";

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
            <div>
                <Router>
                    <Home/>
                    <Welcome login={this.props.login} conditionsAccepted={() => {
                        this.props.dispatch(conditionsAccepted())
                    }
                    }/>
                    <Route path="/login/" render={(props) => (

                        <Login {...props}
                               clients={this.props.clients}
                               login={this.props.login}
                               onPasswordAnswer={(answer) => {
                                   this.props.dispatch(passwordAnswer(answer))
                               }
                               }
                               onUserAnswer={(answer) => {
                                   this.props.dispatch(userAnswer(answer))
                               }
                               }
                        />
                    )}/>

                    <Route path="/profile/" render={(props) => (
                        <Profile {...props}
                                 client={this.props.clients[this.props.currentClient]}
                        />
                    )}/>
                    <Route path="/services/" exact component={Services}/>

                    <Route path="/services/transport/" component={Transport}/>
                    <Route path="/services/restaurants/" component={Restaurants}/>
                    <Route path="/services/room_services/" component={RoomServices}/>


                </Router>
            </div>

        );

    }
}

function mapStateToProps(state) {
    return {
        ...state
    };
}

export default connect(mapStateToProps)(App);

