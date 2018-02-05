import { START, SUCCESS, FAIL } from '../constants'

export default store => next => action => {
    const {callAPI, type, ...rest} = action

    if (!callAPI) return next(action)

    next({
        type: type + START,
        ...rest
    })

    //no need in setTimeout, demonstration only
    setTimeout(() => {
        fetch(callAPI)
            .then(res => res.json())
            .then(response => next({...rest, response, type: type + SUCCESS}))
            .catch(error => next({...rest, error, type: type + FAIL}))
    }, 1000)
}