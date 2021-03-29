import React from 'react';
import {NavLink} from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./navBar.css"

export default class NavBar extends React.Component {

    render() {

        return (
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/">What do you need?</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services/transport/">Transports</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services/restaurants/">Restaurants</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services/room_services/">Room Services</NavLink>
                    </li>

                    <li>
                        <NavLink to="/profile/" id="userNav"> <AccountCircleIcon style={{fontSize: 50}}/>


                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}
