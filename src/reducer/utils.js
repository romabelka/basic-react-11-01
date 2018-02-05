import { OrderedMap } from 'immutable'

export function arrToMap(arr, ModelRecord) {
    return arr.reduce(
        (acc, item) => acc.set(item.id, ModelRecord ? new ModelRecord(item) : item)
        , new OrderedMap({})
    )
}