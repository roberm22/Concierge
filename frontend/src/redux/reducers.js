import {combineReducers} from 'redux';
import {
    CHANGE_RESTAURANT,
    CHANGE_ROOM_SERVICES,
    CHANGE_TRANSPORT,
    CONDITIONS,
    END_SESSION,
    SUBMIT,
    UPDATE,
    USER_ANSWER
} from './actions'

function login(state = [], action = {}) {
    switch (action.type) {

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
                if (isClient) {
                    newState = {
                        ...state,
                        isLogged: true,
                        id: client.id,
                        status: "success"
                    };
                }

                if (newState.attempts === 4) {
                    newState = {
                        ...state,
                        status: "warning"
                    };
                }
            });

            if (newState.status !== "success" && newState.status !== "warning") {
                newState = {
                    ...state,
                    status: "error",
                    attempts: state.attempts + 1
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

        case CONDITIONS:
            return {
                ...state,
                conditionsAccepted: true
            };

        default:
            return state;
    }

}

function clients(state = [], action = {}) {
    switch (action.type) {
        case UPDATE:
            state[action.payload.id-1] = action.payload.newData;
            console.log(state);
            return state;

        default:
            return state;
    }
}

function services(state = [], action = {}) {
    switch (action.type) {
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


const GlobalState = (combineReducers({
    login,
    clients,
    services,
    currentService,
}));

export default GlobalState;