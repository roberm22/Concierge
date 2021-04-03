import React from 'react';
import { Link } from "react-router-dom";
import {CartIcon} from '../icons/ShoppingIcons';
import './header.css';

export default class Header extends React.Component {

    render() {
        return (
            <header className="headerShop">
                <Link to='/shopping2/'>Store</Link>
                <Link to='/shopping2/about'>About</Link>
                <Link to='/shopping2/cart'> <CartIcon/> Cart </Link>
            </header>
        );
    }
}
 
