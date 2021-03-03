import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import {
    passwordAnswer, userAnswer
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
                    login = {this.props.login}
                    onPasswordAnswer={(answer) => {
                        this.props.dispatch(passwordAnswer(answer))}
                    }
                    onUserAnswer={(answer) => {
                        this.props.dispatch(userAnswer(answer))}
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

