import {SELECT_DATE_RANGE} from '../constants'

export default (range = { from: null, to: null }, action) => {
    const {type, payload} = action

    switch (type) {
        case SELECT_DATE_RANGE:
            return payload.range
    }

    return range
}
