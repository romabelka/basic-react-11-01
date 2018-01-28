import { INCREMENT, DELETE_ARTICLE, SELECT_ARTICLE_DATE_FILTER, SELECT_ARTICLE_FILTER, FILTER_ARCICLES } from '../constants'

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
//  ac for all filter
export function setFilterForArticles(filter) {
    return {
        type: FILTER_ARCICLES,
        payload: { filter }
    }
}



//  action creater for filter      
// export function selectArticleFilter(selected) {
//     return {
//         type: SELECT_ARTICLE_FILTER,
//         payload: { selected }
//     }
// }

// export function selectRangeDateFilter(range) {
//     return {
//         type: SELECT_ARTICLE_DATE_FILTER,
//         payload: { range }
//     }
// }