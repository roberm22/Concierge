import React from 'react';
import {Link} from "react-router-dom";

export default class ShowRoomServices extends React.Component {

    /* Aqui meteremos los componentes que renderizan la página profile */

    render() {

        return (
            <div>
                <h1>{this.props.currentRoomServices.name}</h1>

                <img src={this.props.currentRoomServices.photo.url} width={300} height={180}/>

                <ul>
                    <li>{this.props.currentRoomServices.servicio1}</li>
                    <li>{this.props.currentRoomServices.servicio2}</li>
                    <li>{this.props.currentRoomServices.servicio3}</li>
                    
                </ul>
                {this.props.currentRoomServices.description}
                <div><h3>Solo funciona el link y lo de la fecha no se hacerlo mejor</h3></div>

                <div>

                   Persons: <input type={"text"}/>
                </div>
                <div>
                    Day: <input type={"text"}/> Month: <input type={"text"}/> Time: <input type={"text"}/>
                </div>
                <div>
                    <button>Make Reservation</button> <Link to="/services/room_services/">Go Back</Link>
                </div>
            </div>

        );
    }
}