export default store => next => action => {
 
    const { randomId, ...rest} = action
    if (!randomId) return next(action)

    next({
        ...rest,
        randomId: Math.random().toString(36).substr(2, 9)
    })
}

