import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filters from './filters'
import { FILTER_DATE_RANGE, FILTER_SELECT } from '../constants/index';

const combinedReducer = combineReducers({
    counter: counterReducer,
    articles,
    filters,
    filteredArticles: () => []
})

function filterReducer(state, action) {
    const {type} = action

    function filter(state) {
        const {articles} = state
        const {from, to, selected} = state.filters
        return articles.filter(article => {
            let fromFiltered = from != null ? new Date(article.date) >= from : true
            let toFiltered = to != null ? new Date(article.date) <= to : true
            let selectFiltered = selected && selected.length > 0 ? selected.some(({value}) => article.id == value) : true
            return fromFiltered && toFiltered && selectFiltered
        })
    }

    return {...state, filteredArticles: filter(state)}
}

function rootReducer(state, action) {
    const intermediateState = combinedReducer(state, action)
    const finalState = filterReducer(intermediateState, action)
    return finalState
}

export default rootReducer