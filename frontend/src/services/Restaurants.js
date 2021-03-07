import React from 'react';
import {Link} from "react-router-dom";

export default class Restaurants extends React.Component {

    /* Aqui meteremos los componentes que renderizan la página profile */

    render() {
        let restaurants = this.props.restaurants;
        const listItems = restaurants.map((restaurant,i) =>  <div> <li>

            <Link to={"/services/show_restaurant"} onClick={() =>this.props.onChangeRestaurant(i)}>{restaurant.name}</Link> </li> </div> );
        return (
            <div>
                <h1>Restaurantes Disponibles</h1>
            <ul>{listItems}</ul>
            </div>
        );
    }
}