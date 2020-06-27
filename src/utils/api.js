import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from './_DATA'


export function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, polls]) => ({
        users,
        polls,
    }))
}

export function saveQuestionAnswer(question) {
    return _saveQuestionAnswer(question)
}

export function saveQuestion(question) {
    return _saveQuestion(question)
}