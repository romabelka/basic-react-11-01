import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'

import selectReducer from './selectArticleReducer'
import dateReducer from './rangeDateReducer'

export default combineReducers({
    counter: counterReducer,
    articles,
    select: selectReducer,
    dateRange: dateReducer
})