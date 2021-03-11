import React from 'react';
import {Link} from "react-router-dom";
import { DateTimePicker } from 'react-rainbow-components';
export default class ShowRestaurant extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date:new Date(),
            locale: { name: 'en-US', label: 'English (US)' }};

    }

    render() {
        const containerStyles = {
            maxWidth: 400,

        };
        return (
            <div>
                <h1>{this.props.currentRestaurant.name}</h1>

                <img src={this.props.currentRestaurant.photo.url} alt={"Restaurante"} width={300} height={180}/>

                <ul>
                    <li>Cuisine: {this.props.currentRestaurant.cuisine}</li>
                    <li>Address: {this.props.currentRestaurant.address}</li>
                </ul>
                {this.props.currentRestaurant.description}

                <div>

                    Persons:<input type={"number"} placeholder={"Select number of persons"}/>  Name: <input type={"text"} placeholder={"Name for the reservation"}/>
                </div>

                <div style={containerStyles}>
                     <DateTimePicker placeholder={"Date"} value={this.state.date} onChange={value => {this.setState( {date:value})} } hour24={true} locale={this.state.locale.name}/>
                </div>
                <div>
                    <button>Make Reservation</button>
                    <Link to="/services/restaurants/">Go Back</Link>
                </div>
            </div>

        );
    }
}