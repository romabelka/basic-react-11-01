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

export function selectArticle(selected) {
    return {
        type: TYPES.SELECT_ARTICLE,
        payload: { selected }
    }
}

export function selectDateRange(range) {
    return {
        type: TYPES.SELECT_DATE_RANGE,
        payload: { range }
    }
}
