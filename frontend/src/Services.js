import React from 'react';
import {NavLink} from "react-router-dom";
import NavBar from "./NavBar";
import "./services.css";

export default class Services extends React.Component {

    render() {
        return (
            <div>
                <NavBar/>
                <nav>
                    <ul className={"menu"}>
                        <li>
                            <NavLink href="#!"  to="/services/transport/">Transport</NavLink>
                        </li>
                        <li>
                            <NavLink href="#!"  to="/services/restaurants/">Restaurants</NavLink>
                        </li>
                        <li>
                            <NavLink href="#!"  to="/services/room_services/">Room Services</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
