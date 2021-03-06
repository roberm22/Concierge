export const PASSWORD_ANSWER = 'PASSWORD_ANSWER';
export const USER_ANSWER = 'USER_ANSWER';
export const NOMBRE_ANSWER = 'NOMBRE_ANSWER';
export const FECHA_ANSWER = 'FECHA_ANSWER';
export const COMENTARIO_ANSWER = 'COMENTARIO_ANSWER';
export const CONDITIONS = 'CONDITIONS';
export const CHANGE_RESTAURANT = 'CHANGE_RESTAURANT';
export const CHANGE_ROOM_SERVICES = 'CHANGE_ROOM_SEVICES';


export function passwordAnswer(answer) {
    return { type: PASSWORD_ANSWER, payload: { answer } };
}

export function userAnswer(answer) {
    return { type: USER_ANSWER, payload: { answer } };
}

export function nombreAnswer(answer) {
    return { type: NOMBRE_ANSWER, payload: { answer } };
}

export function fechaAnswer(answer) {
    return { type: FECHA_ANSWER, payload: { answer } };
}
export function comentarioAnswer(answer) {
    return { type: COMENTARIO_ANSWER, payload: { answer } };
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



