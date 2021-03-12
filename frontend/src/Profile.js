import React from 'react';
import {Link, Redirect} from "react-router-dom";
import {Alert, AlertTitle} from "@material-ui/lab";
import './profile.css'
import update from 'react-addons-update';
import NavBar from "./NavBar";
import Welcome from "./Welcome";

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {...this.props.client};
        this.timer = null;

    }

    componentDidMount() {
        if (this.props.login.conditionsAccepted) {
            let alert = document.querySelector('#alert');
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
                        (<div>
                            <NavBar/>

                            <h1>Gestión del perfil</h1>

                            <Alert severity="success" id="alert">
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

                                    <h3>DNI:(Depuracion)
                                        <input type="text" id="DNI" placeholder={this.state.DNI} value={this.state.DNI}
                                               onChange={e => this.setState({DNI: e.target.value})}/>
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
                                    {/*<h3>Contraseña:*/}
                                    {/*    <input  type="password" id="password"  placeholder={this.state.profile.password} value={this.state.profile.password} onChange={e=>this.setState({profile:{password: e.target.value}})}></input>*/}
                                    {/*</h3>*/}
                                    {/*<h3>Correo:*/}
                                    {/*    <input  type="text" id="email" placeholder={this.state.profile.email} value={this.state.profile.email} onChange={e=>this.setState({profile:{email: e.target.value}})}></input>*/}
                                    {/*</h3>*/}
                                </div>
                                <div style={{clear: "both"}}>{}</div>

                            </div>
                            <ul>
                                <li>
                                    <button onClick={() => this.props.update(this.state)}>
                                        Modificar datos (WIP)
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => {
                                        console.log(this.state)
                                    }}>
                                        (Boton de Depuracion)
                                    </button>
                                </li>

                                <li>
                                    <button onClick={this.props.endSession}> Cerrar sesión</button>
                                </li>
                                <li>
                                    <Link to="/">Volver</Link>
                                </li>
                            </ul>

                        </div>)
                        :
                        (<Welcome conditions={this.props.conditions} login={this.props.login}/>)}
                </div>

            );
        } else {
            return (<Redirect to="/login/"/>);
        }
    }
}
