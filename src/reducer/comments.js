import { ADD_COMMENT } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'

const commentsMap = defaultComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (state = commentsMap, action) => {
    const { type } = action

    switch (type) {
        case ADD_COMMENT:
            state = {
                ...state,
                [action.payload.id]: {
                    ...action.payload.comment,
                    id: action.payload.id
                }
            }
            return state;
    }

    return state
}