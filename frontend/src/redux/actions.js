
export const PASSWORD_ANSWER = 'PASSWORD_ANSWER';
export const USER_ANSWER = 'USER_ANSWER';
export const SUBMIT = 'SUBMIT';
export const CONDITIONS = 'CONDITIONS';
export const CHANGE_RESTAURANT = 'CHANGE_RESTAURANT';
export const CHANGE_TRANSPORT = 'CHANGE_TRANSPORT';
export const CHANGE_ROOM_SERVICES = 'CHANGE_ROOM_SEVICES';


export function passwordAnswer(answer) {
    return { type: PASSWORD_ANSWER, payload: { answer } };
}

export function userAnswer(answer) {
    return { type: USER_ANSWER, payload: { answer } };
}

export function submit(clients) {
    return { type: SUBMIT, payload: { clients }   };
}

export function conditionsAccepted() {
    return { type: CONDITIONS};
}

export function changeRestaurant(answer){
    return {type: CHANGE_RESTAURANT, payload: {answer}}
}

export function changeRoomServices(answer){
    return {type: CHANGE_ROOM_SERVICES, payload: {answer}}
}

export function changeTransport(answer){
    return {type: CHANGE_TRANSPORT, payload: {answer}}
}


