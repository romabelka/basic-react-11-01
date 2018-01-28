import { FILTER_ARCICLES } from '../constants'

export default (state = { range: { from: null, to: null }, selected: [] }, action) => {
    const { type, payload } = action

    switch (type) {
        case FILTER_ARCICLES:
            return Object.assign({}, state, payload)
    }

    return state
}