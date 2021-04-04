import React from 'react';
import { Link } from "react-router-dom";
import {CartIcon} from '../icons/ShoppingIcons';
import './header.css';

export default class Header extends React.Component {

    render() {
        return (
            <header className="headerShop">
                <Link to='/shopping/'>Store</Link>
                <Link to='/shopping/report'>Report an incident</Link>
                <Link to='/shopping/cart'> <CartIcon/> Cart </Link>
            </header>
        );
    }
}
 
