import React from 'react';
import {NavLink} from 'react-router-dom'
import "./navBar.css"

export default class NavBar extends React.Component {

    render() {

        return (
            <ul >

                <li>
                    <NavLink exact to="/" >Home</NavLink>
                </li>

                <li>
                    <NavLink to="/services/" >Services</NavLink>
                </li>

                <li>
                    <NavLink to="/profile/" >Profile</NavLink>
                </li>

            </ul>
        );
    }
}
