

export function formatPoll(poll, author) {
    const { id, optionOne, optionTwo } = poll
    const { name, avatarURL: avatar } = author

    return {
        id,
        name,
        avatar,
        optionOne,
        optionTwo,
    }
}