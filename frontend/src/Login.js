import React from 'react';

import {Link} from "react-router-dom";

import { Alert, AlertTitle } from '@material-ui/lab';

export default class Login extends React.Component{

render(){
    return (
        <div>
            {(this.props.login.isLogged)?
                (
                    <Alert severity="success">
                        <AlertTitle>Has iniciado sesión correctamente</AlertTitle>
                        Ahora puedes ver tu perfil en<strong>Profile</strong>
                    </Alert>

                ): (
                    <div>
                        <Alert severity="info">
                            <AlertTitle>Inicio de sesión</AlertTitle>
                            Debes iniciar sesión para poder acceder a<strong>Profile</strong>
                        </Alert>

                        <h3>User:</h3>
                        <input type="text"
                               value={this.props.login.userAnswer || ''}
                               onChange={(event) => this.props.onUserAnswer(event.target.value)}/>
                        <h3>Password:</h3>
                        <input type="text"
                               value={this.props.login.passwordAnswer || ''}
                               onChange={(event) => this.props.onPasswordAnswer(event.target.value)}/>

                        <p>Rellena los campos y haz click en Submit</p>
                        <br/>
                        <button onClick={this.props.submitFunction}> Submit </button><br/><br/>
                    </div>
                )
            }
            <Link to="/">Volver</Link>
        </div>

    );
}
}

