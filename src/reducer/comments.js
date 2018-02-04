import { ADD_COMMENT } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'

const commentsMap = defaultComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (state = commentsMap, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT: {
            const { comment } = payload

            return {
                ...state,
                [comment.id]: { ...comment, id: comment.id}
            }
        }
    }

    return state
}