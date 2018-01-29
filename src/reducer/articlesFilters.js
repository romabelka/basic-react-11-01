import {FILTER_ARTICLES_BY_ID, FILTER_ARTICLES_BY_RANGE} from '../constants'

export default (
  articlesFilters = {
    selected: [],
    range: {
      from: null,
      to: null
    }
  },
  action,
) => {
  const {type, payload} = action
  console.log('articlesFilters: ', articlesFilters)
  switch (type) {
    case FILTER_ARTICLES_BY_ID:
      return {
        ...articlesFilters,
        selected: payload,
      }
    case FILTER_ARTICLES_BY_RANGE:
      return {
        ...articlesFilters,
        range: payload,
      }
    default:
      return articlesFilters
  }
}