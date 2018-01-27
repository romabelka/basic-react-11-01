import {CHANGE_SELECT} from '../constants'

export default (selectState = null, action) => {
    const {type, payload} = action
    return type === CHANGE_SELECT ? payload : selectState
}