import { Map, Record } from 'immutable'
import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import {arrToMap} from './utils'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null,
})

const idRecord = Record({
    id: null
})

const ReducerRecord = Record({
    entities: arrToMap([], CommentRecord),
    loading: arrToMap([], idRecord),
    loaded: arrToMap([], idRecord),
    error: arrToMap([], idRecord)
})

export default (state = new ReducerRecord(), action) => {
    const { type, payload, randomId} = action

    switch (type) {
        case ADD_COMMENT:
            return state.mergeIn(['entities'], arrToMap([{
                id: randomId,
                user: payload.comment.user,
                text: payload.comment.text
            }], CommentRecord))
        case LOAD_COMMENTS + START:
            return state.setIn(['loading', payload.articleId], true)
        case LOAD_COMMENTS + SUCCESS:
            const { response } = action
            return state
                .setIn(['loading', payload.articleId], false)
                .setIn(['loaded', payload.articleId], true)
                .mergeIn(['entities'], arrToMap(response, CommentRecord))
    }

    return state
}