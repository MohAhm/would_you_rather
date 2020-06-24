export const RECEIVE_POLLS = 'RECEIVE_POLLS'

// action creator
export function receivePolls(polls) {
    return {
        type: RECEIVE_POLLS,
        polls,
    }
}