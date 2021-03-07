import { combineReducers } from 'redux';
import {
    PASSWORD_ANSWER,
    USER_ANSWER,
    CONDITIONS,
    NOMBRE_ANSWER,
    FECHA_ANSWER,
    COMENTARIO_ANSWER,
    CHANGE_RESTAURANT,
    CHANGE_ROOM_SERVICES,
    CHANGE_TRANSPORT
} from './actions'

function login(state = [], action = {}) {
    switch(action.type) {
        case PASSWORD_ANSWER:
            return {
                ...state,
                passwordAnswer: action.payload.answer
            };


        case USER_ANSWER:
            return {
                ...state,
                userAnswer: action.payload.answer
            };

        case CONDITIONS:
            return {
                ...state,
                conditionsAccepted: true
            };

        default:
            return state;
    }

}

function siguiente(state = [], action = {}) {
    switch(action.type) {
        case NOMBRE_ANSWER:
            return {
                ...state,
                nombreAnswer: action.payload.answer
            };


        case FECHA_ANSWER:
            return {
                ...state,
                fechaAnswer: action.payload.answer
            };
        case COMENTARIO_ANSWER:
            return {
                ...state,
                comentarioAnswer: action.payload.answer
            };

        case CONDITIONS:
            return {
                ...state,
                conditionsAccepted: true
            };

        default:
            return state;
    }

}


function currentClient(state = 0, action = {}) {
    switch(action.type) {
        default:
            return state;
    }
}

function clients(state = [], action = {}) {
    switch(action.type) {
        default:
            return state;
    }
}

function restaurants(state = [], action = {}) {
    switch(action.type) {
        default:
            return state;
    }
}

function currentRestaurant(state = [], action = {}) {
    switch(action.type) {

        case CHANGE_RESTAURANT:
            console.log(action.payload.answer)
            let restaurant = action.payload.answer
            return restaurant

        default:
            return state;
    }
}

function roomServices(state = [], action = {}){
    switch(action.type){
        default:
            return state;
    }
}
function currentRoomServices(state = [], action = {}) {
    switch (action.type) {
    
        case CHANGE_ROOM_SERVICES:
            console.log(action.payload.answer);
            let room_services = action.payload.answer;
            return room_services;

        default:
            return state;
    }
  }
function transports(state = [], action = {}) {
    switch(action.type) {
        default:
            return state;
    }
}

function currentTransport(state = [], action = {}) {
    switch(action.type) {

        case CHANGE_TRANSPORT:
            console.log(action.payload.answer)
            let transport = action.payload.answer
            return transport;

        default:
            return state;
    }
}


const GlobalState = (combineReducers({
    login,
    currentClient,
    clients,
    restaurants,
    currentRestaurant,
    siguiente,
    roomServices,
    currentRoomServices,
    transports,
    currentTransport
}));

export default GlobalState;