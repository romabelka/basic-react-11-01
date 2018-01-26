import * as TYPES from '../constants'

export function increment() {
    return {
        type: TYPES.INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: TYPES.DELETE_ARTICLE,
        payload: { id }
    }
}

export function setFilters(filters) {
    return {
        type: TYPES.SET_FILTERS,
        payload: { filters }
    }
}
