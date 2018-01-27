import {INCREMENT, DELETE_ARTICLE, CHANGE_SELECT, CHANGE_RANGE, SET_FILTERS} from '../constants'

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

export function setFilters(typeFilter, filters) {
    return {
        type: SET_FILTERS,
        payload: {
            typeFilter,
            filters
        }
    }
}