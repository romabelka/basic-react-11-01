import { ADD_COMMENT, LOAD_ALL_COMMENTS, START, FAIL, SUCCESS } from '../constants'
import {Record} from 'immutable'
import {normalizedComments} from '../fixtures'
import {arrToMap} from './utils'

const CommentRecord = Record({
    id: null,
    text: null,
    author: null,
    loading: true,
})

const ReducerRecord = Record({
    entities: arrToMap([], CommentRecord),
    loading: false,
    loaded: false,
    error: null
})

// export default (comments = arrToMap(normalizedComments), action) => {
export default (comments = new ReducerRecord(), action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(randomId, {
                ...payload.comment,
                id: randomId
            })

        case LOAD_ALL_COMMENTS + START:
            return comments
                .set('loading', true)
                .set('loaded', false)

        case LOAD_ALL_COMMENTS + FAIL:
            return comments
                .set('loading', false)
                .set('error', error)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return comments
                .set('loading', false)
                .set('loaded', true)
                .set('entities', arrToMap(response, CommentRecord));
    }

    return comments
}