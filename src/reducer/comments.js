import { ADD_COMMENT, LOAD_COMMENT, START, SUCCESS } from '../constants'

import { arrToMap } from './utils'
import { Map, Record } from 'immutable'



const CommentsRecord = Record({
    id: null,
    text: null,
    user: null,
    loading: false
})

const ReducerRecord = Record({
    entities: arrToMap([], CommentsRecord),
    loading: false,
    loaded: false,
    error: null
})


export default (comments = new ReducerRecord(), action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', randomId], new CommentsRecord({
                ...payload.comment,
                id: randomId
            }))

        case LOAD_COMMENT + START:
            return comments.set('loading', true)

        case LOAD_COMMENT + SUCCESS:
            {
                console.log(payload.response)
                return comments
                    .set('loading', false)
                    .set('loaded', true)
                    .set('entities', arrToMap(payload.response, CommentsRecord))
            }
    }

    return comments
}