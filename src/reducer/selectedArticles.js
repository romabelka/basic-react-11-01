import {FILTER_ARTICLES} from '../constants'

export default (selectedArticles = [], action) => {
  const {type, payload} = action
  
  switch (type) {
    case FILTER_ARTICLES:
      console.log('FILTER_ARTICLE: ', payload)
      return payload
    default:
      return selectedArticles
  }
}