import {DELETE_ARTICLE} from '../constants'
import defaultArticles from '../fixtures'

export default (articlesState = defaultArticles, action) => {
  const {type, payload} = action
  
  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter(article => article.id !== payload.id)
    default:
      return articlesState
  }
}