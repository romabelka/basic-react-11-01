import { Map, Record } from 'immutable'
import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL } from '../constants'
import {arrToMap} from './utils'

const CommentsRecord = Record({
    id: null,
    user: null,
    text: null
})

const ReducerRecord = Record({
    entities: arrToMap([], CommentsRecord),
    loading: false,
    loaded: false,
    error: null,
    //cache: false,
    loadedId: null
})

export default (state = new ReducerRecord(), action) => {
    const { type, payload, randomId, error } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId],
                new CommentsRecord({ ...payload.comment, id: randomId}))

        case LOAD_COMMENTS + START:
            return state
                .set('loading', true)
                .set('loadedId', payload.id)

        case LOAD_COMMENTS + FAIL:
            return state
                .set('loading', false)
                .set('error', error)

        case LOAD_COMMENTS + SUCCESS:
            return state
                .set('loading', false)
                .set('loaded', true)
                //.set('cache', true)
                .set('entities', arrToMap(payload.response, CommentsRecord))

        //case LOAD_ARTICLE + START:
        //    return articles.setIn(['entities', payload.id, 'loading'], true)
        //
        //case LOAD_ARTICLE + SUCCESS:
        //    return articles.setIn(['entities', payload.id], new ArticleRecord(payload.response))
    }

    return state
}