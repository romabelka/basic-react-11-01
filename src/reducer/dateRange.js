import {SELECT_ARTICLE_DATE} from '../constants'

export default (rangeState = {from: null, to: null}, action) => {
    const {type, payload} = action

    switch(type) {
        case SELECT_ARTICLE_DATE: return payload.range
    }

    return rangeState
}