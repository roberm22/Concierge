import React from 'react';
import {Redirect} from "react-router-dom";
import {Alert, AlertTitle} from "@material-ui/lab";
import './profile.css'
import update from 'react-addons-update';
import NavBar from "./NavBar";



export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {...this.props.client};
        this.timer = null;

    }

    componentDidMount() {
        if (this.props.login.conditionsAccepted) {
            let alert = document.querySelector('#alert-profile');
            if (this.props.login.isLogged) {
                this.timer = setTimeout(() => alert.style.display = 'none', 3000)
            }
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        if (this.props.login.isLogged) {
            return (
                <div>
                    {(this.props.login.conditionsAccepted) ?
                        (<div className={"profileMain"}>
                            <NavBar/>

                            <h1>Gestión del perfil</h1>

                            <Alert severity="success" id="alert-profile">
                                <AlertTitle>Bienvenido a tu perfil</AlertTitle>
                                Puedes editar tu perfil con <strong>Modificar datos</strong>
                            </Alert>

                            <div className={"information"}>
                                <img src={process.env.PUBLIC_URL + "/" + this.props.client.profile.photo.filename}
                                     alt={"Sin foto de perfil"}/>
                                <div className={"box"}>
                                    <h3>Nombre: {this.props.client.profile.name} </h3>
                                    <h3>Habitacion: {this.props.client.room}</h3>
                                    <h3>DNI: {this.props.client.DNI}</h3>
                                    <h3>Correo:
                                        <input  type="text" id="email" placeholder={this.state.profile.email} value={this.state.profile.email}
                                                onChange={(e) => {
                                                    let newState = update(this.state, {
                                                        profile: { email: {$set: e.target.value} }
                                                    });
                                                    this.setState(newState);
                                                }
                                                }
                                        />
                                    </h3>
                                    <h3>Usuario:
                                        <input  type="text" id="username" placeholder={this.state.profile.username} value={this.state.profile.username}
                                                onChange={(e) => {
                                                    let newState = update(this.state, {
                                                        profile: { username: {$set: e.target.value} }
                                                    });
                                                    this.setState(newState);
                                                    }
                                                }
                                        />
                                    </h3>

                                    <h3>Contraseña:
                                        <input  type="password" id="password" placeholder={this.state.profile.password} value={this.state.profile.password}
                                                onChange={(e) => {
                                                    let newState = update(this.state, {
                                                        profile: { password: {$set: e.target.value} }
                                                    });
                                                    this.setState(newState);
                                                }
                                                }
                                        />
                                    </h3>

                                </div>
                                <div style={{clear: "both"}}>{}</div>

                            </div>
                            <ul>
                                <li>
                                    <button onClick={() => this.props.update(this.state)}>
                                        Modificar datos
                                    </button>
                                </li>
                                <li>
                                    <button onClick={this.props.endSession}> Cerrar sesión</button>
                                </li>
                            </ul>

                        </div>)
                        :
                        (<Redirect to="/welcome/" />)}

                </div>

            );
        } else {
            return (<Redirect to="/login/"/>);
        }
    }
}
