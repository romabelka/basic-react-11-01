import { Map, Record } from 'immutable'
import { LOAD_COMMENTS, ADD_COMMENT, START, SUCCESS, FAIL } from '../constants'
import {arrToMap} from './utils'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
})

export default (state = new CommentRecord(), action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case LOAD_COMMENTS + SUCCESS:
            return arrToMap(response, CommentRecord).mergeDeep(state)

        case ADD_COMMENT:
            return state.set(randomId, new CommentRecord(payload.comment))
    }

    return state
}