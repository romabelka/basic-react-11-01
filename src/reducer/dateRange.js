import {SET_FILTERS, DATE_RANGE} from '../constants'

export default (dateRange = {from: null, to: null}, action) => {
    const {type, payload} = action
    return type === SET_FILTERS && payload.typeFilter === DATE_RANGE ? payload.filters.dateRange : dateRange
}