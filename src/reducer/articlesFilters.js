import {ARTICLES_FILTER} from '../constants'

export default (state = { range: { from: null, to: null }, selected: [] }, action) => {
    const { type, payload } = action

    switch(type) {
        case ARTICLES_FILTER: return Object.assign({}, state, payload)
    }

    return state
}