import {FILTER_DATERANGE, FILTER_SELECTED} from '../constants'

export default (state = {from: null, to: null, selected: null}, action) => {
//    console.log(JSON.stringify(action.payload))

    const {type, payload} = action

    switch (type) {
        case FILTER_DATERANGE:
            return {
                ...payload,
                selected: state.selected
            };

        case FILTER_SELECTED:
            return {
                ...state,
                selected: payload.selected
            }
    }

    return state
}