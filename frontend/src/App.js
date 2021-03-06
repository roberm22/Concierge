import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import {
    passwordAnswer, userAnswer, conditionsAccepted, nombreAnswer, fechaAnswer, comentarioAnswer
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
import Siguiente from "./assets/Transport_elements/siguiente";


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

                    <Route path="/services/transport/" render={(props) => (
                       <div>
                        <Transport {...props} transports={this.props.transports}
                        siguiente={this.props.siguiente}
                                   onNombreAnswer={(answer) => {
                                       this.props.dispatch(nombreAnswer(answer))
                                   }
                                   }
                                   onFechaAnswer={(answer) => {
                                       this.props.dispatch(fechaAnswer(answer))
                                   }

                                   }
                                   onComentarioAnswer={(answer) => {
                                       this.props.dispatch(comentarioAnswer(answer))
                                   }
                                   }
                        />
                        <h2>Así se vería la pantalla al pulsar siguiente: (esto es temporal lógicamente)</h2>
                        <Siguiente {...props}

                        transports={this.props.transports}
                        siguiente={this.props.siguiente}
                        onNombreAnswer={(answer) => {
                        this.props.dispatch(nombreAnswer(answer))
                    }
                    }
                        onFechaAnswer={(answer) => {
                        this.props.dispatch(fechaAnswer(answer))
                    }

                    }
                        onComentarioAnswer={(answer) => {
                        this.props.dispatch(comentarioAnswer(answer))
                    }
                    }
                        />
                       </div>

                    )}/>



                    <Route path="/services/restaurants/" render={(props) => (
                        <Restaurants {...props} restaurants={this.props.restaurants} />
                    )}/>
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
