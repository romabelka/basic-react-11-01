import {INCREMENT, DELETE_ARTICLE, CHANGE_SELECT, CHANGE_RANGE} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function changeSelect(selected) {
    return {
        type: CHANGE_SELECT,
        payload: selected
    }
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_RANGE,
        payload: dateRange
    }
}