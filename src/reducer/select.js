import {SET_FILTERS, SELECT} from '../constants'

export default (selectState = null, action) => {
    const {type, payload} = action
    return type === SET_FILTERS && payload.TYPE_FILTER === SELECT ? payload.filters.selectedArticle : selectState
}