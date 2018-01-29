import {FILTER_ARTICLES} from '../constants'

export default (selectedArticles = [], action) => {
  const {type, payload} = action
  
  switch (type) {
    case FILTER_ARTICLES:
      return payload
    default:
      return selectedArticles
  }
}