

export function formatQuestion(question, author) {
    const { id, optionOne, optionTwo } = question
    const { name, avatarURL: avatar } = author

    return {
        id,
        name,
        avatar,
        optionOne,
        optionTwo,
    }
}


export function formatUser(user) {
    const { name, avatarURL: avatar, answers, questions } = user
    const answeredQuestions = Object.keys(answers).length
    const createdQuestions = questions.length
    const score = answeredQuestions + createdQuestions

    return {
        name,
        avatar,
        answeredQuestions,
        createdQuestions,
        score,
    }
}