import { Map, Record } from 'immutable'
import { LOAD_COMMENTS, ADD_COMMENT, START, SUCCESS, FAIL } from '../constants'
import {arrToMap} from './utils'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null,
    loading: false
})

const ReducerRecord = Record({
    entities: arrToMap([], CommentRecord),
    loading: false,
    loaded: false,
    error: null
})

export default (comments = new ReducerRecord(), action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
        case LOAD_COMMENTS + START:
            return comments.set('loading', true)
        
        case LOAD_COMMENTS + FAIL:
            return comments
                .set('loading', false)
                .set('error', error)
        
        case LOAD_COMMENTS + SUCCESS: 
            return comments
                .set('loading', false)
                .set('loaded', true)
                .set('entities', arrToMap(payload.response, CommentRecord))

        case ADD_COMMENT:
            return comments.set(randomId, {
                ...payload.comment,
                id: randomId
            })
    }

    return comments
}