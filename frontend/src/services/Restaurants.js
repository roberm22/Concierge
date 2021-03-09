import React from 'react';
import {Link} from "react-router-dom";

export default class Restaurants extends React.Component {

    render() {
        let restaurants = this.props.restaurants;
        const listItems = restaurants.map((restaurant,i) =>  <div> <li>

            <Link to={"/services/restaurants/show_restaurant"} onClick={() =>this.props.onChangeRestaurant(i)}>{restaurant.name}</Link> </li> </div> );
        return (
            <div>
                <h1>Restaurantes Disponibles</h1>
            <ul>{listItems}</ul>
            </div>
        );
    }
}