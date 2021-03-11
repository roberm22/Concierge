import { combineReducers } from 'redux';
import {
    USER_ANSWER,
    SUBMIT,
    END_SESSION,
    CONDITIONS,
    CHANGE_RESTAURANT,
    CHANGE_ROOM_SERVICES,
    CHANGE_TRANSPORT
} from './actions'

function login(state = [], action = {}) {
    switch(action.type) {

        case USER_ANSWER:
            return {
                ...state,
                userAnswer: action.payload.user,
                passwordAnswer: action.payload.password
            };

        case SUBMIT:
            let newState = state;
            let isClient;
            action.payload.clients.map((client) => {
                isClient = (state.userAnswer === client.profile.username) && (state.passwordAnswer === client.profile.password);
                if(isClient){
                    newState = {
                        ...state,
                        isLogged : true,
                        id : client.id,
                        status : "success"
                    };
                }

                if(newState.attempts === 4){
                    newState = {
                        ...state,
                        status : "warning"
                    };
                }
            });

            if(newState.status !== "success" && newState.status !== "warning"){
                newState = {
                    ...state,
                    status : "error",
                    attempts : state.attempts +1
                };
            }
            return newState;

        case END_SESSION:

            return {
                ...state,
                status: "info",
                isLogged: false,
                userAnswer: "",
                passwordAnswer: ""
            };

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
    clients,
    services,
    currentService,
    view: viewReducer
}));

export default GlobalState;