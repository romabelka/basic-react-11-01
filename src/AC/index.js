import {INCREMENT, DELETE_ARTICLE, FILTER} from '../constants'

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

export function filterByDate(a, b) {
  return {
    type: FILTER,
    payload: [a, b]
  }
}