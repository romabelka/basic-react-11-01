import {FILTER_ARTICLES_BY_ID} from '../constants'

export default (articlesFilters = {selected: [], range: {}}, action) => {
  const {type, payload} = action
  console.log('articlesFilters: ', articlesFilters)
  switch (type) {
    case FILTER_ARTICLES_BY_ID:
      console.log('FILTER_ARTICLES_BY_ID', payload)
      return {
        ...articlesFilters,
        selected: payload,
      }
    // case FILTER_ARTICLES_BY_ID:
    //   console.log('FILTER_ARTICLES_BY_ID', payload)
    //   return {
    //     ...articlesFilters,
    //     selected: payload,
    //   }
    default:
      return articlesFilters
  }
}