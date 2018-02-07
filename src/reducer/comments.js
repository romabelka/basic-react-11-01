import { Record } from 'immutable'
import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import {arrToMap} from './utils'

const commentRecord = Record({
    id: null,
    user: null,
    text: null
})

const ReducerRecord = Record({
    entities: arrToMap([], commentRecord),
    loading: false,
    loaded: false,
    error: null,
    articleID: null,
})

export default (state = new ReducerRecord(), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new commentRecord({ ...payload.comment, id: randomId}))

        case LOAD_COMMENTS + START:
            return state
                .set('loading', true)
                .set('articleID', payload.id)

        case LOAD_COMMENTS + SUCCESS:
            return state
                    .set('entities', arrToMap(payload.response, commentRecord))
                    .set('loading', false)
                    .set('loaded', true)
    }

    return state
}