import React from 'react';
import {DateTimePicker} from 'react-rainbow-components';
import {NavLink} from "react-router-dom";
import "./ShowTransport.css";

import {toast} from "react-toastify";

import "react-datetime/css/react-datetime.css";
import {ArrowUpward} from "@material-ui/icons";
import {Alert, AlertTitle} from "@material-ui/lab";
import {Route} from "react-router-dom";
import ListaTransport from './ListaTransport';
import update from "react-addons-update";

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
            locale: {name: 'en-US', label: 'English (US)'},
            points:0
        };
    }

    play = () => {
        ['#link1'].forEach(link => {
            toast(<NewMessageNotification link={link}/>);
        });
    }

    render() {
        let points, message, title, link;
        if(this.props.login.isLogged){
            points = this.props.client.profile.points ;
        }
        else{
            points = 0;
        }
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

                    <Route
                        path="/"
                        render={() => <ListaTransport />}
                    />

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
                    <div>
                        <h3>Points:{this.state.points + points}</h3>
                    </div>
                    {(!this.props.login.isLogged) ?
                        (<div>
                             <Alert severity={this.props.login.status} id="alertT">
                                <AlertTitle>{title}</AlertTitle>
                                <div> {message}</div>
                                <div> {link}</div>
                            </Alert>
                        </div>) : <button onClick={() => {
                            this.setState({points: this.state.points +10});
                            let total = points+10+this.state.points
                            let newCliente = update(this.props.client, {
                                profile: {points: {$set: total}}
                            });
                            this.props.update( newCliente);

                            alert("Reservation successful. \n You earned 10 points.");
                        }} disabled={!this.props.login.isLogged}>Make Reservation</button>
                    }





                </div>
            </div>
        );
    }
}
