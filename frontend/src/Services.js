import React from 'react';
import {Link} from "react-router-dom";
import NavBar from "./NavBar";

export default class Services extends React.Component {

    /* Aqui meteremos los componentes que renderizan la página services */

    render() {
        return (
            <div>
                <NavBar/>
                <h1>Services</h1>

                <nav>
                    <ul>
                        <li>
                            <Link to="/services/transport/">Transport</Link>
                        </li>
                        <li>
                            <Link to="/services/restaurants/">Restaurants</Link>
                        </li>
                        <li>
                            <Link to="/services/room_services/">Room Services</Link>
                        </li>
                    </ul>
                </nav>

            </div>
        );
    }
}
