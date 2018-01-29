import {FILTER_ARTICLES_BY_ID} from '../constants'

export default (selectedArticles = [], action) => {
  const {type, payload} = action
  
  switch (type) {
    case FILTER_ARTICLES_BY_ID:
      console.log('FILTER_ARTICLES_BY_ID', payload)
      return payload
    default:
      return selectedArticles
  }
}