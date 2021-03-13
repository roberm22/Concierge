import React from 'react';
import {NavLink} from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./navBar.css"

export default class NavBar extends React.Component {

    render() {

        return (
            <nav>
                <ul >
                    <li>
                        <NavLink exact to="/" >Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/services/" >Services</NavLink>
                    </li>

                    <li>
                        <NavLink to="/profile/" id="user"> <AccountCircleIcon style={{ fontSize: 20 }}/> </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}
