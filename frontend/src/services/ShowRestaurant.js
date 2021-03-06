import React from 'react';
import {Link} from "react-router-dom";

export default class ShowRestaurant extends React.Component {

    /* Aqui meteremos los componentes que renderizan la página profile */

    render() {

        return (
            <div>
                <h1>{this.props.currentRestaurant.name}</h1>

                <img src={this.props.currentRestaurant.photo.url} width={300} height={180}/>

                <ul>
                    <li>Cuisine: {this.props.currentRestaurant.cuisine}</li>
                    <li>Address: {this.props.currentRestaurant.address}</li>
                </ul>
                {this.props.currentRestaurant.description}
                <div><h3>Solo funciona el link y lo de la fecha no se hacerlo mejor</h3></div>

                <div>

                   Persons: <input type={"text"}/>
                </div>
                <div>
                    Day: <input type={"text"}/> Month: <input type={"text"}/> Time: <input type={"text"}/>
                </div>
                <div>
                    <button>Make Reservation</button> <Link to="/services/restaurants/">Go Back</Link>
                </div>
            </div>

        );
    }
}