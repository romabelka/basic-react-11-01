import {FILTER_DATE_RANGE, FILTER_SELECT} from '../constants'

export default (filtersState = {from: null, to: null, selected: null}, action) => {
    const {type, payload} = action

    switch (type) {
        case FILTER_DATE_RANGE:
            return {
                from: payload.from,
                to: payload.to,
                selected: filtersState.selected,
            }
        case FILTER_SELECT:
            return {
                from: filtersState.from,
                to: filtersState.to,
                selected: payload.selected,
            }
    }

    return filtersState
}