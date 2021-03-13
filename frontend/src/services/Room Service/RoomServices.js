import React from 'react';
import {Link} from "react-router-dom";
import  "./RoomServices.css";

export default class RoomServices extends React.Component {

    render(){
        let x = this.props.roomServices;
        const listItems = x.map((room_services,i) =>  
            <div> 
                
                <Link className="listado" to={"/services/room_services/show_room_services"} onClick={() =>this.props.onChangeRoomServices(i)}>{room_services.name}</Link>
                
            </div> );
        return (
            <div className="main_Room">
                <h1 className="encabezado">Servicios Disponibles</h1>
        
            <ul>{listItems}</ul>
         </div>
         );
    }
}
