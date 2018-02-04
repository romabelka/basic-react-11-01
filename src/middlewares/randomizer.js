import {ADD_COMMENT} from '../constants'

const generateRandomId = (num = 10, str = '') => num ? generateRandomId(num - 1, str += String.fromCharCode(Math.round(Math.random() * 25) + 65)) : str;
// можно добавить проверку на id, чтобы не было повторений, но это потом

export default store => next => action => {
    if (action.type === ADD_COMMENT) {
        action.payload.id = generateRandomId();
    }
    next(action)
}