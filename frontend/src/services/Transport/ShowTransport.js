import React from 'react';
import {NavLink} from "react-router-dom";
import "./ShowTransport.css";

import {toast} from "react-toastify";

import "react-datetime/css/react-datetime.css";
import {Alert, AlertTitle} from "@material-ui/lab";
import NavBar from "../../Views/NavBar";

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
            points: 0
        };
    }

    play = () => {
        ['#link1'].forEach(link => {
            toast(<NewMessageNotification link={link}/>);
        });
    }

    render() {
        let points, message, title, link;
        if (this.props.login.isLogged) {
            points = this.props.client.points;
        } else {
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
                <NavBar points={this.state.points + points} isLogged={this.props.login.isLogged}/>


                <form className="mainReserve">
                    <fieldset>

                        <legend>Costume your trip</legend>

                        <div className="form-group">
                            <label htmlFor="InputDni">Name for reservation</label>
                            <input type="text" className="form-control" id="InputDni" aria-describedby="emailHelp"
                                   placeholder="Enter Name" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputRoom">Room</label>
                            <input type="text" className="form-control" id="InputRoom" aria-describedby="roomHelp"
                                   placeholder="Enter room" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="Select">Select the transport</label>
                            <select className="form-control" id="Select">
                                <option>Select the transport</option>
                                <option>Taxi</option>
                                <option>VTC</option>
                                <option>Shuttle</option>
                                <option>Plane tickets</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputDate">Date</label>
                            <input type="date" className="form-control" id="InputDate" aria-describedby="dateHelp"
                                   required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputHour">Hour</label>
                            <input type="time" className="form-control" id="InputHour" aria-describedby="hourHelp"
                                   required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="Textarea">Additional information</label>
                            <textarea className="form-control" id="Textarea" rows="3"/>
                        </div>


                        {(!this.props.login.isLogged) ?
                            (<div className="boxT">
                                <Alert severity={this.props.login.status} id="alertT">
                                    <AlertTitle>{title}</AlertTitle>
                                    <div> {message}</div>
                                    <div> {link}</div>
                                </Alert>
                            </div>)
                            :
                            (
                                (this.props.client.tierVIP >= 2) ?
                                    <button type="submit"
                                            onClick={() => {
                                                alert("Reservation successful.");
                                            }}
                                            className="btn btn-primary">Reserve</button>
                                    :
                                    <div>
                                        <Alert variant="filled" severity="warning" id="alertT">
                                            This is a Premium service, more information: {"\t"}
                                            <NavLink to="/prices/">Service levels</NavLink>
                                        </Alert>
                                    </div>

                            )

                        }
                    </fieldset>
                </form>
            </div>
        );
    }
}
