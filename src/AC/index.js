import {INCREMENT, DELETE_ARTICLE, FILTER_DATE_RANGE, FILTER_SELECT} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function filterDateRange({from, to}) {
    return {
        type: FILTER_DATE_RANGE,
        payload: { from, to }
    }
}

export function filterSelect(selected) {
    return {
        type: FILTER_SELECT,
        payload: { selected }
    }
}