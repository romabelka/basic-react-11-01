import {INCREMENT, DELETE_ARTICLE, CHANGE_FILTERS} from '../constants'

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
 
export function changeFilters(change) {
    return {
        type: CHANGE_FILTERS,
        payload: { change }
    }
}