import { ADD_COMMENT } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'

const commentsMap = defaultComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (state = commentsMap, action) => {
    const { type, payload } = action

    switch (type) {

        case ADD_COMMENT:
            return {
                ...state,
                [payload.id] : {
                    id: payload.id,
                    user: payload.user,
                    text: payload.text
                }
        }

    }

    return state
}