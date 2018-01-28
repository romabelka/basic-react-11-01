import {INCREMENT, DELETE_ARTICLE, FILTER_DATERANGE, FILTER_SELECTED} from '../constants'

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
        type: FILTER_DATERANGE,
        payload: { from, to }
    }
}

export function filterSelected(selected) {
    return {
        type: FILTER_SELECTED,
        payload: { selected }
    }
}