import { combineReducers } from 'redux';
import {
    PASSWORD_ANSWER,
    USER_ANSWER,
    SUBMIT,
    CONDITIONS,
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

        case SUBMIT:
            let newState = state;
            action.payload.clients.map((client) => {
                let login = (state.userAnswer === client.profile.username) && (state.passwordAnswer === client.profile.password)
                if(login){
                    newState.isLogged = login
                    newState.id = client.id;
                }

            });
            return newState;

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

function services(state = [], action = {}) {
    switch(action.type) {
        default:
            return state;
    }
}

function currentService(state = [], action = {}) {
    switch (action.type) {
        case CHANGE_RESTAURANT:
            return action.payload.answer
        case CHANGE_TRANSPORT:
            return action.payload.answer
        case CHANGE_ROOM_SERVICES:
            return action.payload.answer
        default:
            return state;
    }
  }

function viewReducer(state = null, action) { //lo utilizare mas tarde para la vista profile
    switch (action.type) {
        case "SHOW":
        case "EDIT":
        case "NEW":
            return action.type;
        case "CONDITIONS":
            return null;
        default:
            return state
    }
}



const GlobalState = (combineReducers({
    login,
    currentClient,
    clients,
    services,
    currentService,
    view: viewReducer
}));

export default GlobalState;