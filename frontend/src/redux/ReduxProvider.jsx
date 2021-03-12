import GlobalState from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { clients, login} from "../assets/clients_data";
import {restaurants} from "../assets/restaurants_data";
import {roomServices} from "../assets/room_service_data";
import {transports} from "../assets/transports_data";

import React from 'react';
import App from '../App';


export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            clients: [...clients],
            login: login,
            services:{restaurants,roomServices,transports},
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