import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import {
    passwordAnswer
} from "./redux/actions";

import Main from './Main';
import Login from './Login';

class App extends Component {

    render() {

        return (

            <div>
                <Main/>

                <Login
                    clients={this.props.clients}
                    client={this.props.clients[this.props.currentClient]}
                    login = {this.props.login}
                    onPasswordAnswer={(answer) => {
                        this.props.dispatch(passwordAnswer(this.props.currentClient, answer))}
                    }
                />

            </div>

        );

    }
}

function mapStateToProps(state){
  return{
    ...state
  };
}

export default connect(mapStateToProps)(App);

