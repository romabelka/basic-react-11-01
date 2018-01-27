import {CHANGE_RANGE} from '../constants'

export default (dateRange = {from: null, to: null}, action) => {
    const {type, payload} = action
    return type === CHANGE_RANGE ? payload : dateRange
}