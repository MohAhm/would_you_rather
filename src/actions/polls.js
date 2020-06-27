import { saveQuestionAnswer } from "../utils/api"

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ANSWER_POLL = 'ANSWER_POLL'


// action creator
export function receivePolls(polls) {
    return {
        type: RECEIVE_POLLS,
        polls,
    }
}

function answerPoll({ id, answer, authedUser }) {
    return {
        type: ANSWER_POLL,
        id,
        answer,
        authedUser,
    }
}


// asynchronous action creator
export function handleAnswerPoll(poll) {
    return (dispatch) => {
        dispatch(answerPoll(poll))

        return saveQuestionAnswer(poll)
            .catch(e => {
                console.log('Error in handleAnswerPoll: ', e)
                dispatch(answerPoll(poll))
                alert('There was an error answering the poll. Try again')
            })
    }
}