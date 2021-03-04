export const PASSWORD_ANSWER = 'PASSWORD_ANSWER';
export const USER_ANSWER = 'USER_ANSWER';
export const CONDITIONS = 'CONDITIONS';


export function passwordAnswer(answer) {
    return { type: PASSWORD_ANSWER, payload: { answer } };
}

export function userAnswer(answer) {
    return { type: USER_ANSWER, payload: { answer } };
}
export function conditionsAccepted() {
    return { type: CONDITIONS};
}




