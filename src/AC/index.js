import {INCREMENT, DELETE_ARTICLE, ARTICLES_FILTER} from '../constants'

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

export function setArticlesFilter(filters) {
    return {
        type: ARTICLES_FILTER,
        payload: filters
    }
}