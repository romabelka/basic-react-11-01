import { INCREMENT, DELETE_ARTICLE, SELECT_ARTICLE_DATE_FILTER, SELECT_ARTICLE_FILTER } from '../constants'

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
//  action creater for filter      
export function selectArticleFilter(selected) {
    return {
        type: SELECT_ARTICLE_FILTER,
        payload: { selected }
    }
}

export function selectRangeDateFilter(range) {
    return {
        type: SELECT_ARTICLE_DATE_FILTER,
        payload: { range }
    }
}