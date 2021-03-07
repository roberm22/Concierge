import React from 'react';
import pepe from "./assets/pepe.jpg";
import {Link} from "react-router-dom";
export default class Profile extends React.Component {

    /* Aqui meteremos los componentes que renderizan la página profile */

    render() {
        return (
            <div>
                <h1>Gestión del perfil</h1>
                <h3>Nombre:{this.props.client.profile.name}</h3>
                <h3>Habitacion:{this.props.client.room}</h3>
                <h3>DNI:{this.props.client.DNI}</h3>
                <h3>Usuario:{this.props.client.profile.username}</h3>
                <h3>Correo:{this.props.client.profile.email}</h3>
                <img src={pepe} alt={"Foto del perfil"}/>

                {console.log(this.props.client)}
                <Link to="/login/">Volver</Link>
            </div>
        );
    }
}
