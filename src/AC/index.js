import {
  INCREMENT,
  DELETE_ARTICLE,
  FILTER_ARTICLES_BY_ID,
  FILTER_ARTICLES_BY_RANGE,
} from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: {id}
  }
}

export function filterArticlesById(id) {
  return {
    type: FILTER_ARTICLES_BY_ID,
    payload: id,
  }
}

export function filterArticlesByRange({from, to}) {
  return {
    type: FILTER_ARTICLES_BY_RANGE,
    payload: {from, to},
  }
}