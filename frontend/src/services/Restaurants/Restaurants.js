import React from 'react';
import {Link} from "react-router-dom";
import "./restaurants.css"
export default class Restaurants extends React.Component {

    render() {
        let restaurants = this.props.restaurants;
        const listItems = restaurants.map((restaurant,i) =>
            <div className="restaurants">
            <li className={"res_li"}>
            <Link className={"res_link"} to={"/services/restaurants/show_restaurant"} onClick={() =>this.props.onChangeRestaurant(i)}>{restaurant.name}</Link> </li> </div> );
        return (
            <div className="main_Rest">
                <div className="sub_Rest">
                <h1 className="header_r">Available Restaurants:</h1>
            <ul>{listItems}</ul>
                </div>
            </div>
        );
    }
}