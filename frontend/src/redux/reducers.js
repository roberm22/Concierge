import { combineReducers } from 'redux';
import { PASSWORD_ANSWER, USER_ANSWER } from './actions'

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


const GlobalState = (combineReducers({
    login,
    currentClient,
    clients
}));

export default GlobalState;