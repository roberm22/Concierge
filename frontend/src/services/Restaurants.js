import React from 'react';

export default class Restaurants extends React.Component {

    /* Aqui meteremos los componentes que renderizan la página profile */

    render() {
        let restaurants = this.props.restaurants;
        const listItems = restaurants.map((restaurant) =>    <li>{restaurant.name}</li>  );  return (
            <ul>{listItems}</ul>  );
    }
}