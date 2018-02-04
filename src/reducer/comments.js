import { ADD_COMMENT } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'

const commentsMap = defaultComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (state = commentsMap, action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:

        return Object.assign({}, state, {
            [randomId]: {
                id: randomId,
                ...payload
            }
        })
    }

    return state
}