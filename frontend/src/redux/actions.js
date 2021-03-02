export const PASSWORD_ANSWER = 'PASSWORD_ANSWER';


export function passwordAnswer(index, answer) {
    return { type: PASSWORD_ANSWER, payload: { index, answer } };
}



