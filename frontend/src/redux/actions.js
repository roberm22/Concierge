
export const USER_ANSWER = 'USER_ANSWER';
export const SUBMIT = 'SUBMIT';
export const END_SESSION = 'END_SESSION';
export const CHANGE_RESTAURANT = 'CHANGE_RESTAURANT';
export const CHANGE_TRANSPORT = 'CHANGE_TRANSPORT';
export const CHANGE_ROOM_SERVICES = 'CHANGE_ROOM_SEVICES';
export const UPDATE = 'UPDATE';
export const CONDITIONS = 'CONDITIONS';


export function userAnswer(user, password) {
    return { type: USER_ANSWER, payload: { user, password } };
}

export function submit(clients) {
    return { type: SUBMIT, payload: { clients }  };
}
export function conditions(){
    return {type: CONDITIONS};
}

export function endSession(){
    return { type: END_SESSION };
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

export function updateProfile(index,client){
    return {type: UPDATE,payload: {index,client}};
}


