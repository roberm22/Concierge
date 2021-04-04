import React from 'react';
import {DateTimePicker} from 'react-rainbow-components';
import {NavLink} from "react-router-dom";
import "./ShowTransport.css";

import {toast} from "react-toastify";

import "react-datetime/css/react-datetime.css";
import {ArrowBack} from "@material-ui/icons";
import {Alert, AlertTitle} from "@material-ui/lab";
import update from "react-addons-update";
import NavBar from "../../NavBar";
import {Form} from "react-bootstrap";

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
            points = this.props.client.profile.points;
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
                <div className="boxT">
                    <NavLink to="/services/transport/" id="arrowT"> <ArrowBack/> </NavLink>
                    <h1>{this.props.currentTransport.description} </h1>
                    <img
                        src={this.props.currentTransport.photo.url}
                        alt={"Transport"}
                    />
                    <br/>
                    <h3>Customize the trip:</h3>
                    <Form>

                        {(this.props.currentTransport.id !== 2) ?
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Pick-Up location/Departure</Form.Label>
                                <Form.Control type="text" placeholder="Departure point"/>
                            </Form.Group>
                            : null
                        }

                        <Form.Group controlId="exampleForm.ControlInput2">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control type="text" placeholder="Destination point"/>
                        </Form.Group>

                        {(this.props.currentTransport.id !== 2) ?
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Date</Form.Label>
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
                            </Form.Group>
                            : null
                        }

                        <Form.Group controlId="exampleForm.ControlInput3">
                            <Form.Label>Passengers</Form.Label>
                            <Form.Control type="number" min={1} placeholder="Select a number"/>
                        </Form.Group>

                        {(this.props.currentTransport.id === 2) ?
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Hours</Form.Label>
                                <Form.Control as="select">
                                    <option>6:00</option>
                                    <option>8:00</option>
                                    <option>10:00</option>
                                    <option>12:00</option>
                                    <option>14:00</option>
                                    <option>16:00</option>
                                    <option>18:00</option>
                                    <option>20:00</option>
                                    <option>22:00</option>
                                </Form.Control>
                            </Form.Group>
                            : null
                        }

                        {(this.props.currentTransport.id === 3) ?
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Additional information</Form.Label>
                                <Form.Control as="textarea" rows={3}/>
                            </Form.Group>
                            : null
                        }

                    </Form>

                    {(!this.props.login.isLogged) ?
                        (<div>
                            <Alert severity={this.props.login.status} id="alertT">
                                <AlertTitle>{title}</AlertTitle>
                                <div> {message}</div>
                                <div> {link}</div>
                            </Alert>
                        </div>)
                        :
                        <button
                            type="submit"
                            onClick={() => {
                                let multi = 10;
                                if (this.props.client.tierVIP === 2) {
                                    multi = 15;
                                }
                                if (this.props.client.tierVIP === 3) {
                                    multi = 20;
                                }
                                this.setState({points: this.state.points + multi});
                                let total =
                                    this.props.client.profile.points + multi + this.state.points;
                                let newClient = update(this.props.client, {
                                    profile: {points: {$set: total}},
                                });
                                this.props.update(newClient);
                                alert("Reservation successful.\nYou earned " + multi + " points.");
                            }}>Make Reservation
                        </button>
                    }
                </div>
            </div>
        );
    }
}
