export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_USER = 'ADD_QUESTION_USER'
export const ANSWER_QUESTION_USER = 'ANSWER_QUESTION_USER'

// action creator
export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function addQuestionUser(authedUser, qid) {
    return {
        type: ADD_QUESTION_USER,
        authedUser,
        qid,
    }
}

export function answerQuestionUser(authedUser, qid, answer) {
    return {
        type: ANSWER_QUESTION_USER,
        authedUser,
        qid,
        answer,
    }
}