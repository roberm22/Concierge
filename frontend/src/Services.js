import React from 'react';
import {NavLink} from "react-router-dom";
import NavBar from "./NavBar";
import "./services.css";

export default class Services extends React.Component {

    render() {
        return (
            <div>
                <NavBar/>
                <nav className="services">
                    <ul>
                        <li>
                            <NavLink to="/services/transport/">Transport</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services/restaurants/">Restaurants</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services/room_services/">Room Services</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
