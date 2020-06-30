import { showLoading, hideLoading } from "react-redux-loading-bar"
import { saveQuestionAnswer, saveQuestion } from "../utils/api"

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ANSWER_POLL = 'ANSWER_POLL'
export const ADD_POLL = 'ADD_POLL'


// action creator
function addPoll(poll) {
    return {
        type: ADD_POLL,
        poll,
    }
}

export function receivePolls(polls) {
    return {
        type: RECEIVE_POLLS,
        polls,
    }
}

function answerPoll(authedUser, qid, answer) {
    return {
        type: ANSWER_POLL,
        authedUser,
        qid,
        answer,
    }
}


// asynchronous action creator
export function handleAddPoll(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then(poll => dispatch(addPoll(poll)))
            .then(() => dispatch(hideLoading()))
    }
}

export function handleAnswerPoll(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })
            .then(() => dispatch(answerPoll(authedUser, qid, answer)))
            .then(() => dispatch(hideLoading()))
    }
}