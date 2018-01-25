export default (counterState = 0, action) => {
    return action.type === 'increment' ? counterState + 1 : counterState
}