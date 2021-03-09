import React from 'react';
import {Link} from "react-router-dom";

export default class Home extends React.Component {

    /* Aqui meteremos los componentes que renderizan la página main */

    render() {
        return (
            <div>
                <h1>Home Page</h1>

                <nav>
                    <ul >
                        <li style={{display: "inline-block"}}>
                            <Link to="/">Home</Link>
                        </li>
                        <li style={{display: "inline-block"}}>
                            <Link to="/login/">Login</Link>
                        </li>
                        <li style={{display: "inline-block"}}>
                            <Link to="/services/">Services</Link>
                        </li>
                        <li style={{display: "inline-block"}}>
                            <Link to="/profile/">Profile</Link>
                        </li>

                    </ul>
                </nav>

            </div>
        );
    }
}
