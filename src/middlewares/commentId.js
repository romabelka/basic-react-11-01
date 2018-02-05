import { ADD_COMMENT } from '../constants'

export default store => next => action => {
    switch (action.type) {
        case ADD_COMMENT:
            const id = Math.floor(Math.random() * 1000000) + '';
            action.payload.comment.id = id;
    }
    
    next(action)
}