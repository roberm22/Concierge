import React from 'react';
import "./login.css";

import {Redirect} from "react-router-dom";
import { ArrowBack } from '@material-ui/icons';
import {Alert, AlertTitle} from '@material-ui/lab';
import {Link} from "@material-ui/core";

export default class Login extends React.Component{

    constructor(props) {
        super(props);
        this.timerlog = null;
    }
    componentDidMount() {
        let alert = document.querySelector('#alert');
        this.timerlog = setTimeout(() => alert.style.visibility = 'hidden', 3000)
    }

    componentWillUnmount() {
        clearTimeout(this.timerlog);
    }

    render(){
        let message, title;
        switch (this.props.login.status) {
            case "error":
                title = "Error";
                message = "Username or password incorrect"
                break;

            case "info":
                title = "Log in";
                message = "You need to be logged to see your profile"
                break;

            case "warning":
                title = "Warning";
                message = "Maximum number of attempts reached - Account locked"
                break;

            case "success":
                break;

            default:
                console.log(this.props.login.status);
        }


        return (
            <div className="main">
                {(this.props.login.isLogged)?
                    (
                        <Redirect to="/profile/" />

                    ): (
                        <div className="sub">

                            <Link href="/" id="arrow"> <ArrowBack/> </Link>

                            <div className="header">
                                <h1>CONCIERGE</h1>
                            </div>

                            <div className="tittle">
                                <h2>User login</h2>
                            </div>

                            <input type="text"
                                   placeholder="User"
                                   name="Name"
                                   className="user"
                                   value={this.props.login.userAnswer || ''}
                                   onChange={(event) => this.props.onUserAnswer(event.target.value)}/>

                            <input type="Password"
                                   placeholder="Password"
                                   name="Password"
                                   className="pass"
                                   value={this.props.login.passwordAnswer || ''}
                                   onChange={(event) => this.props.onUserAnswer(this.props.login.userAnswer, event.target.value)}/>

                            <div className="submit">
                                <button onClick={this.props.submitFunction}> Submit </button><br/><br/>
                            </div>


                            <Alert severity={this.props.login.status} id="alert">
                                <AlertTitle>{title}</AlertTitle>
                                {message}
                            </Alert>

                        </div>
                    )
                }
            </div>

    );
}
}

