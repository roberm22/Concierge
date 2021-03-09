import React from 'react';

import {Link, Redirect} from "react-router-dom";

import { Alert, AlertTitle } from '@material-ui/lab';

export default class Login extends React.Component{

    render(){
        let message, title;
        switch (this.props.login.status) {
            case "error":
                title = "Error";
                message = "Usuario o contraseña incorrectos"
                break;

            case "info":
                title = "Inicio de sesión";
                message = "Debes iniciar sesión para poder acceder a tu perfil"
                break;

            case "warning":
                title = "Actividad sospechosa";
                message = "Número máximo de intentos alcanzado - Cuenta bloqueada"
                break;

            default:
                console.log('Algo ha ido mal');
        }

        return (
            <div>
                {(this.props.login.isLogged)?
                    (
                        <Redirect to="/profile/" />

                    ): (
                        <div>

                            <Alert severity={this.props.login.status}>
                                <AlertTitle>{title}</AlertTitle>
                                {message}
                            </Alert>

                            <h3>User:</h3>

                            <input type="text"
                                   value={this.props.login.userAnswer || ''}
                                   onChange={(event) => this.props.onUserAnswer(event.target.value)}/>

                            <h3>Password:</h3>

                            <input type="text"
                                   value={this.props.login.passwordAnswer || ''}
                                   onChange={(event) => this.props.onUserAnswer(this.props.login.userAnswer, event.target.value)}/>

                            <p>Rellena los campos y haz click en Submit</p>
                            <br/>
                            <button onClick={this.props.submitFunction}> Submit </button><br/><br/>
                        </div>
                    )
                }
                <Link to="/">Home</Link>
            </div>

    );
}
}

