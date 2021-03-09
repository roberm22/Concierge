import React from 'react';
import pepe from "./assets/pepe.jpg";
import {Link, Redirect} from "react-router-dom";
import {Alert, AlertTitle} from "@material-ui/lab";
export default class Profile extends React.Component {

    render() {
        if(this.props.login.isLogged){
            return (
                <div>
                    <h1>Gestión del perfil</h1>

                    <Alert severity="success">
                        <AlertTitle>Has iniciado sesión correctamente</AlertTitle>
                        Ahora puedes editar tu perfil en<strong>Ajustes</strong>
                    </Alert>

                    <h3>Nombre:{this.props.client.profile.name}</h3>
                    <h3>Habitacion:{this.props.client.room}</h3>
                    <h3>DNI:{this.props.client.DNI}</h3>
                    <h3>Usuario:{this.props.client.profile.username}</h3>
                    <h3>Correo:{this.props.client.profile.email}</h3>
                    <img src={pepe} alt={"Foto del perfil"}/>

                    {console.log(this.props.client)}
                    <Link to="/">Volver</Link>
                </div>
            );
        }
        else{
            return(<Redirect to="/login/" />);
            }
    }
}
