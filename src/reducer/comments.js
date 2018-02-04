import { ADD_NEW_COMMENT } from '../constants'
import { normalizedComments as defaultComments } from '../fixtures'

const commentsMap = defaultComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (state = commentsMap, action) => {
    const { type } = action

    switch (type) {
        case ADD_NEW_COMMENT:
            {
                console.log("==new data" + action.payload.id)
                // return state

                return {
                    ...state,
                    [action.payload.id]: { user: action.payload.comment.user, text: action.payload.comment.text }
                }

            }
    }

    return state
}