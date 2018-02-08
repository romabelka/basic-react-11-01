import { Map, Record } from 'immutable'
import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import {arrToMap} from './utils'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
})

export default (comments = arrToMap([], CommentRecord), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(randomId, {
                ...payload.comment,
                id: randomId
            })

        case LOAD_COMMENTS + SUCCESS:
            return comments.merge(arrToMap(payload.response, CommentRecord))
    }

    return comments
}