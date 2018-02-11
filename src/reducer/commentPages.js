import { LOAD_COMMENT_PAGES, LOAD_COMMENT_PAGE, START, SUCCESS } from '../constants'
import { arrToMap } from './utils'
import { OrderedMap, Record } from 'immutable'

const PageRecord = Record({
    page: null,
    loading: false,
    loaded: false,
    comments: []
})

const ReducerState = Record({
    entities: arrToMap([], PageRecord),
    total: null,
    number: null
})

export default (commentPages = new ReducerState(), action) => {
    const { type, payload, response} = action

    switch (type) {
        case LOAD_COMMENT_PAGE + START:
            return commentPages.setIn(['entities', payload.number, 'commentsLoading'], true)

        case LOAD_COMMENT_PAGES + SUCCESS:
            return commentPages.set('total', response.total)

        case LOAD_COMMENT_PAGE + SUCCESS:
            let comments = response.records.map(comment => comment.id)
            return commentPages
                .setIn(['entities', payload.number, 'comments'], comments)
                .setIn(['entities', payload.number, 'commentsLoading'], false)
                .setIn(['entities', payload.number, 'commentsLoaded'], true)
                .set('total', response.total)
                .set('number', payload.number)
    }

    return commentPages
}