import { RECEIVE_POLLS, ANSWER_POLL } from '../actions/polls'

export default function polls (state = {}, action) {
    switch (action.type) {
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.polls
            }

        case ANSWER_POLL:
            const { id, answer, authedUser } = action

            return {
                ...state,
                [id]: {
                    ...state[id],
                    [answer]: {
                        ...state[id][answer],
                        votes: state[id][answer].votes.concat([authedUser])
                    }
                }
            }

        default:
            return state
    }
}