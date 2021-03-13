import React from 'react';
import './welcome.css'
import {Redirect} from "react-router-dom";
import NavBar from "./NavBar";

export default class Welcome extends React.Component {

    render() {
        return (
            <div className={"welcomeMain"}>
                <NavBar/>
                {(this.props.login.conditionsAccepted === false && this.props.login.isLogged) ? (
                    <div>
                        <div className={"welcomeBox"}>
                            < h1> Bienvenido < /h1>
                            <p className={"welcomeP"}>
                                Se acaba de dar de alta en nuestro servicio de Concierge, en el podras acceder a
                                diferentes utilidades como servicio de habitaciones,transportes o restaurantes.
                            </p>
                            <p className={"welcomeP"}>
                                Este servicio tiene unas condiciones de uso que son:
                                <ul>
                                    <li>Querer a Rober</li>
                                    <li>Cuidar a Rober</li>
                                    <li>Querer mas aun a Rober</li>
                                </ul>
                            </p>

                            <br/>
                        </div>
                        <button className={"welcomeButton"} onClick={this.props.conditions}>Entiendo y acepto las
                            condiciones
                        </button>

                    </div>
                ) : (<Redirect to="/profile/"/>)}


            </div>
        );
    }

}
