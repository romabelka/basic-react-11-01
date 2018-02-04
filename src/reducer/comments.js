import { ADD_COMMENT } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'

const commentsMap = defaultComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (state = commentsMap, action) => {
    const { type, payload } = action

    if (type === ADD_COMMENT) {
        const {id, comment} = payload
        return {...state, [id]: {...comment, id}}
    }

    return state
}