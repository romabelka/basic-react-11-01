import { ADD_COMMENT } from '../constants'

function generateId() {
    return Math.random().toString(16).slice(2)
}

export default store => next => action => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT: {
            action.payload = {
                ...payload,
                comment: {...payload.comment, id: generateId()}
            }
        }
    }

    return next(action) 
}