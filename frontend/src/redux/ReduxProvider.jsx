import GlobalState from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import {login} from "../assets/clients_data";
import {restaurants} from "../assets/restaurants_data";
import {roomServices} from "../assets/room_service_data";
import {transports} from "../assets/transports_data";
import {products, cartItems} from '../assets/shopping_card_data';
import {tours} from '../assets/tours_data';
import {showsData, shows} from '../assets/shows_data';
import React from 'react';
import App from '../App';


export default class ReduxProvider extends React.Component {

    constructor(props) {
        super(props);
        this.initialState = {
            clients: [],
            login: login,
            services:{restaurants,roomServices,transports,tours,showsData},
            products: [...products],
            cartItems: [...cartItems],
            shows: [...shows],
            currentService:0
        };
        this.store = this.configureStore();
    }


    render(){
        return (
            <Provider store={ this.store}>
                <div style={{ height: '100%' }} >
                    <App store={ this.store}/>
                </div>
            </Provider>
        );
    }

    configureStore(){
        return createStore(GlobalState, this.initialState);
    }
}