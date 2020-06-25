
export function formatPollCard(poll, author, authedUser) {
    const { id, optionOne, optionTwo } = poll
    const { name, avatarURL } = author
    const { text, votes: votesOptionOne } = optionOne
    const { votes: votesOptionTwo } = optionTwo

    return {
        id,
        name,
        avatar: avatarURL,
        subText: text.substring(0, text.length / 2),
        hasAnswered: votesOptionOne.includes(authedUser) || votesOptionTwo.includes(authedUser)
    }
}