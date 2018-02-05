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
            const {id, articleId, user, text} = payload.comment;
            let comments = {...state};
            comments[id] = {
                id: id,
                user: user,
                text: text,
            }
            return comments;
    }

    return state
}