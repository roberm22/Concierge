import React from 'react';
import {Link} from "react-router-dom";

export default class RoomServices extends React.Component {

    /* Aqui meteremos los componentes que renderizan la página profile */
    render(){
        let x = this.props.roomServices;
        const listItems = x.map((room_services,i) =>  
            <div> 
                <li> 
                    <Link to={"/services/room_services/show_room_services"} onClick={() =>this.props.onChangeRoomServices(i)}>{room_services.name}</Link>
                </li> 
            </div> );
        return (
            <div>
                <h1>Servicios Disponibles</h1>
            <ul>{listItems}</ul>
         </div>
         );
    }
}
