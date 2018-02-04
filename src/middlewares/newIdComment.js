import { ADD_NEW_COMMENT } from '../constants'


export default store => next => action => {
    console.log('--- state before: ', store.getState())
    console.log('--- action: ', action)

    function randId() {
        return (Math.random() * 1e32).toString(36);
    }

    // console.log(randId()) // для теста


    if (action.type === ADD_NEW_COMMENT) {
        console.log("new id" + randId())
    }



    next(action)
    console.log('--- state after: ', store.getState())
}