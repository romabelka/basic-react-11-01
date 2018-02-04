import { ADD_COMMENT } from "../constants";

export default store => next => action => {
  const { payload } = action
  next({...action, payload: {...payload, id: idGenerator()}})
}

const idGenerator = () => Math.random().toString(36).slice(2)