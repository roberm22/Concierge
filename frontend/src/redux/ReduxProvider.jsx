import GlobalState from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { clients, login} from "../assets/clients_data";
import {restaurants} from "../assets/restaurants_data";

import React from 'react';
import App from '../App';


export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            currentClient: 0,
            clients: [...clients],
            login: [...login],
            restaurants: [...restaurants]
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