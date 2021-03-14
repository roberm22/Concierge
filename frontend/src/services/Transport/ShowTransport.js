import React from 'react';
import { DateTimePicker } from 'react-rainbow-components';
import {Link, NavLink} from "react-router-dom";


//import {Link} from "@material-ui/core";

import  "./ShowTransport.css";
import Calendar_test from '../Calendar_test';


import { ToastContainer, toast } from "react-toastify";

import "react-datetime/css/react-datetime.css";
import {ArrowBack} from "@material-ui/icons";
import {blue} from "@material-ui/core/colors";
import {Alert, AlertTitle} from "@material-ui/lab";

//import {DateTimePicker} from "react-rainbow-components";

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};

const linkStyle = {
    border: "1px solid",
    color: "#fff",
    background: "black",
    padding: "5px"
};
 class NewMessageNotification extends React.Component {

    displayMessage = () => {
        //remove all notifications
        toast.dismiss();

        //navigate to the link. I'll use location hash but it can be done with any router solution
        window.location.hash = this.props.link;
    }

    render(){

        let message, title, link;
        switch (this.props.login.status) {

            case "info":
                title = "Inicio de sesión";
                message = "Debes iniciar sesión para poder realizar reservas."
                link = <NavLink to="/login">      Iniciar Sesión</NavLink>
                break;




            default:
                console.log(this.props.login.status);
        }

        return (
            <div>
                You need to be premium client
            </div>
        );
    }
}


export default class ShowTransport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date:new Date(),
            locale: { name: 'en-US', label: 'English (US)' }};

    }
    play = () => {
        ['#link1'].forEach( link => {
            toast(<NewMessageNotification link={link} />);
        });
    }

    render() {
        const containerStyles = {
            maxWidth: 400,

        };
        let message, title, link;
        switch (this.props.login.status) {

            case "info":
                title = "Inicio de sesión";
                message = "Debes iniciar sesión para poder realizar reservas."
                link = <NavLink to="/login">      Iniciar Sesión</NavLink>
                break;




            default:
                console.log(this.props.login.status);
        }

        return (
            <div className="main_Show">
                <div className="sub">

                    <Link href="/services/transport/" id="arrow"> <ArrowBack/> </Link>

                <h1 className="h" >{this.props.currentTransport.description} </h1>

                    <img src={this.props.currentTransport.photo.url} alt={"Transporte"} width={300} height={180} border={10}/>




                <div>
                    <h3>Customize the trip:</h3>
                </div>

                <div>

                    Number of passengers:<input type={"number"} placeholder={"Select number of persons"} disabled={ !this.props.login.isLogged}/>
                </div>

                <div style={containerStyles}>

                     Departure Date:   <DateTimePicker placeholder={"Date"} disabled={ !this.props.login.isLogged} value={this.state.date} onChange={value => {this.setState( {date:value})} } hour24={true} locale={this.state.locale.name}/>  Return Date:  <DateTimePicker placeholder={"Date"} disabled={ !this.props.login.isLogged} value={this.state.date} onChange={value => {this.setState( {date:value})} } hour24={true} locale={this.state.locale.name}/>
                </div>

                    <div>

                        Point of Departure:<input type={"text"} placeholder={"Departure point"} disabled={ !this.props.login.isLogged} />  Destination: <input type={"text"} placeholder={"Destination"} disabled={ !this.props.login.isLogged}/>
                    </div>
                    <div>

                        Write here any extra information if needed:<input type={"text"} placeholder={"Extra information"} disabled={ !this.props.login.isLogged}/>
                    </div>

                <div>

                    <button onClick={this.play} disabled={ !this.props.login.isLogged}>Make Reservation </button>

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
