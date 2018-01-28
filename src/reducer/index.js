import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'

// import selectReducer from './selectArticleReducer'
// import dateReducer from './rangeDateReducer'

import articlesFilters from './FilterArticlesReducer'





export default combineReducers({
    counter: counterReducer,
    articles,
    articlesFilters

})