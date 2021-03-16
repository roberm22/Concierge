import React from 'react';
import { NavLink} from "react-router-dom";
import {DateTimePicker} from 'react-rainbow-components';
import {Alert, AlertTitle} from "@material-ui/lab";
import {ArrowUpward} from "@material-ui/icons";
import "./ShowRestaurant.css";

export default class ShowRestaurant extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            locale: {name: 'en-US', label: 'English (US)'}
        };

    }

    render() {

        let message, title, link;
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
                <div className={"subR"}>
                    <div className={"boxR"}>
                        <a id="arrowR" href="#"> <ArrowUpward style={{fontSize: 40}}/> </a>
                    </div>
                    <h1 className={"hR"}>{this.props.currentRestaurant.name}</h1>


                    <img src={this.props.currentRestaurant.photo.url} alt={"Restaurante"} width={300} height={180}
                         border={5}/>

                    <div>

                        <h3 className={"h3R"}>Information</h3>


                    </div>

                    <div className={"descriptionR"}>
                        {this.props.currentRestaurant.description}
                    </div>
                    <div>
                        <h3 className={"h3R"}>Make a Reservation</h3>
                    </div>

                    <div className={"subR_input"}>

                        <input type={"number"} placeholder={"Persons"} disabled={!this.props.login.isLogged}/>

                        <input type={"text"} placeholder={"Name"} disabled={!this.props.login.isLogged}/>
                    </div>

                    <div className={"dateR"}>
                        <DateTimePicker placeholder={"Date"} disabled={!this.props.login.isLogged} onChange={value => {
                            this.setState({date: value})
                        }} hour24={true} locale={this.state.locale.name}/>
                    </div>
                    <div className={"subR_button"}>
                        <button disabled={!this.props.login.isLogged}>Make Reservation</button>

                    </div>

                    <Alert severity={this.props.login.status} id="alert">
                        <AlertTitle>{title}</AlertTitle>
                        <div> {message}</div>
                        <div> {link}</div>
                    </Alert>
                </div>
            </div>

        );
    }
}