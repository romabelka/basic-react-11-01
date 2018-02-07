import { Map, Record } from 'immutable'
import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import {normalizedComments} from '../fixtures'
import {arrToMap} from './utils'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
})

const ReducerRecord = Record({
    entities: arrToMap([], CommentRecord),
    loading: false,
    loaded: false,
    error: null
})

export default (comments = new ReducerRecord(), action) => {
    const { type, payload, randomId } = action

    console.log('payload--', payload)

    switch (type) {
        case ADD_COMMENT:
            return comments.set(randomId, {
                ...payload.comment,
                id: randomId
            })
        
        case LOAD_COMMENTS + START:
            return comments.setIn(['entities', payload.id, 'loading'], true)

        case LOAD_COMMENTS + SUCCESS:
            return comments
                .setIn(['entities', payload.id], arrToMap(payload.response, CommentRecord))
    }

    return comments
}