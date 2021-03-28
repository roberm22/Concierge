import React from 'react';
import {DateTimePicker} from 'react-rainbow-components';
import {NavLink} from "react-router-dom";
import Listaitem from "../listItemsGlobal/listaitem";
import "./ShowTransport.css";

import {toast} from "react-toastify";

import "react-datetime/css/react-datetime.css";
import {ArrowUpward} from "@material-ui/icons";
import {Alert, AlertTitle} from "@material-ui/lab";

class NewMessageNotification extends React.Component {
    displayMessage = () => {
        toast.dismiss();
        window.location.hash = this.props.link;
    }
}

export default class ShowTransport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            locale: {name: 'en-US', label: 'English (US)'}
        };
    }

    play = () => {
        ['#link1'].forEach(link => {
            toast(<NewMessageNotification link={link}/>);
        });
    }

    render() {
        let message, title, link;
        switch (this.props.login.status) {
            case "info":
                title = "Log In";
                message = "You need to be logged to make a reservation."
                link = <NavLink to="/login"> Sign In</NavLink>
                break;
            default:
                console.log(this.props.login.status);
        }
        return (
            <div className="main_ShowT">
                <div className="boxT">

                    <a id="arrowT" href="#"> <ArrowUpward style={{fontSize: 40}}/> </a>

                    <h1>{this.props.currentTransport.description} </h1>

                    <img
                        src={this.props.currentTransport.photo.url}
                        alt={"Transporte"}
                    />

                    <h3>Customize the trip:</h3>

                    Number of passengers:
                    <input type={"number"}
                           placeholder={"Select number of persons"}
                           disabled={!this.props.login.isLogged}
                    />

                    Departure Date:
                    <DateTimePicker
                        id={"DatePicker"}
                        placeholder={"Date"}
                        disabled={!this.props.login.isLogged}
                        value={this.state.date}
                        onChange={value => {
                            this.setState({date: value})
                        }}
                        hour24={true}
                        locale={this.state.locale.name}/>

                    Return Date:
                    <DateTimePicker
                        id={"DatePicker"}
                        placeholder={"Date"}
                        disabled={!this.props.login.isLogged}
                        value={this.state.date}
                        onChange={value => {
                            this.setState({date: value})
                        }}
                        hour24={true}
                        locale={this.state.locale.name}
                    />


                    Point of Departure:
                    <input
                        type={"text"}
                        placeholder={"Departure point"}
                        disabled={!this.props.login.isLogged}
                    />

                    Destination:
                    <input
                        type={"text"}
                        placeholder={"Destination"}
                        disabled={!this.props.login.isLogged}
                    />

                    Write here any extra information if needed:
                    <input type={"text"}
                           placeholder={"Extra information"}
                           disabled={!this.props.login.isLogged}
                    />

                    {(!this.props.login.isLogged) ?
                        (<div>
                            <button onClick={this.play} disabled={!this.props.login.isLogged}>Make Reservation</button>
                            <Alert severity={this.props.login.status} id="alertT">
                                <AlertTitle>{title}</AlertTitle>
                                <div> {message}</div>
                                <div> {link}</div>
                            </Alert>
                        </div>) : null
                    }




                </div>
            </div>
        );
    }
}
