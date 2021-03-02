import { combineReducers } from 'redux';
import { PASSWORD_ANSWER } from './actions'

function login(state = false, action = {}) {
    switch(action.type) {
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
        case PASSWORD_ANSWER:
            return state.map((client,i) => {
                return { ...client,
                    userAnswer: action.payload.index === i ? action.payload.answer : client.userAnswer}
            })
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