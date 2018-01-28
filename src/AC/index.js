import {INCREMENT, DELETE_ARTICLE, SELECT_ARTICLE, SELECT_ARTICLE_DATE} from '../constants'

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

export function selectArticle(selected) {
    return {
        type: SELECT_ARTICLE,
        payload: { selected }
    }
}

export function selectDateRange(range) {
    return {
        type: SELECT_ARTICLE_DATE,
        payload: { range }
    }
}