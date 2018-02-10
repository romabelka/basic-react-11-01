import { Record } from 'immutable'
import { LOAD_ALL_COMMENTS, START, SUCCESS, FAIL } from '../constants'
import {arrToMap} from './utils'

const PagesRecord = Record({
    records: [],
    contentLoading: false,
    contentLoaded: false
})

const ReducerRecord = Record({
    entities: arrToMap([], PagesRecord),
    total: 0,
    loading: false,
    loaded: false,
    error: null
})

export default (pages = new ReducerRecord(), action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case LOAD_ALL_COMMENTS + START:
            return pages.setIn(['entities', payload.page, 'contentLoading'], true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return pages
                .setIn(['entities', payload.page, 'contentLoading'], false)
                .setIn(['entities', payload.page, 'contentLoaded'], true)
                .setIn(['entities', payload.page, 'records'], arrToMap(response.records, PagesRecord).keySeq())
                .set('total', response.total)
    }

    return pages
}