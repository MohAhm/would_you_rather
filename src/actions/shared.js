import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api'
import { receiveQuestions, addQuestion, answerQuestion } from './questions'
import { receiveUsers, addQuestionUser, answerQuestionUser } from './users'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading-bar'


const AUTHED_ID = 'tylermcginnis'

// asynchronous action creator
export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then(question => {
                dispatch(addQuestion(question))
                dispatch(addQuestionUser(authedUser, question.id))
            })
            .then(() => dispatch(hideLoading()))
    }
}

export function handleAnswerQuestion(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })
            .then(() => {
                dispatch(answerQuestion(authedUser, qid, answer))
                dispatch(answerQuestionUser(authedUser, qid, answer))
                dispatch(hideLoading())
            })
    }
}