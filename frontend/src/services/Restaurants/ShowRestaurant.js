import React from 'react';
import {NavLink} from "react-router-dom";
import {DateTimePicker} from 'react-rainbow-components';
import {Alert, AlertTitle} from "@material-ui/lab";
import {ArrowBack} from "@material-ui/icons";
import "./ShowRestaurant.css";
import update from "react-addons-update";
import NavBar from "../../Views/NavBar";

export default class ShowRestaurant extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            value: new Date(),
            locale: {name: 'en-US', label: 'English (US)'},
            points: 0
        }
        ;

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
                link = <NavLink to="/login"> Sign in</NavLink>
                break;
            default:
                console.log(this.props.login.status);
        }
        return (
            <div className={"main_ShR"}>
                <NavBar points={this.state.points + points} isLogged={this.props.login.isLogged}/>
                <div className={"boxR"}>
                    <NavLink to="/services/restaurants/" id="arrowR"> <ArrowBack/> </NavLink>

                    <h1 className={"hR"}>{this.props.currentRestaurant.name}</h1>


                    <img src={this.props.currentRestaurant.photo.url} alt={"Restaurante"} width={300} height={180}
                         border={5}/>

                    <h3 className={"h3R"}>Information</h3>


                    <p>{this.props.currentRestaurant.description}</p>


                    <h3 className={"h3R"}>Make a Reservation</h3>


                    <input type={"number"} min={1} placeholder={"Persons"} disabled={!this.props.login.isLogged}/>

                    <input type={"text"} placeholder={"Name"} disabled={!this.props.login.isLogged}/>


                    <DateTimePicker
                        placeholder={"Date"}
                        id={"DatePicker"}
                        value={this.state.value}
                        disabled={!this.props.login.isLogged}
                        onChange={value => {
                            this.setState({date: value, value:value})
                        }}
                        hour24={true}
                        locale={this.state.locale.name}/>


                    {(!this.props.login.isLogged) ?
                        (<div>
                            <Alert severity={this.props.login.status} id="alertRest">
                                <AlertTitle>{title}</AlertTitle>
                                <div> {message}</div>
                                <div> {link}</div>
                            </Alert>
                        </div>)
                        :
                        <button onClick={() => {
                            this.setState({points: this.state.points + 10});
                            let total = points + 10 + this.state.points
                            let newCliente = update(this.props.client, {
                                profile: {points: {$set: total}}
                            });
                            this.props.update(newCliente);

                            alert("HotelReservation successful. \n You earned 10 points.");
                        }}>Make Reservation
                        </button>
                    }
                </div>
            </div>

        );
    }
}