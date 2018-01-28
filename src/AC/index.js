import {INCREMENT, DELETE_ARTICLE, ARTICLES_FILTER_BY_DATE, ARTICLES_FILTER_BY_KEYS} from '../constants'

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

export function articlesFilterByDate(from, to) {
  return {
      type: ARTICLES_FILTER_BY_DATE,
      payload: { from, to }
  }
}

export function articlesFilterByKeys(keys) {
  return {
      type: ARTICLES_FILTER_BY_KEYS,
      payload: { keys }
  }
}