import { INCREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE, CHANGE_SELECTION, ADD_NEW_COMMENT, ADD_NEW_ID_COMMENT_TO_ARCTICLE } from '../constants'

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

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { dateRange }
    }
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: { selected }
    }
}


export function addNewComment(id, comment) {
    return {
        type: ADD_NEW_COMMENT,
        payload: { id, comment }
    }

}

export function addIdNewCommentToArticle(idarcticle) {
    return {
        type: ADD_NEW_ID_COMMENT_TO_ARCTICLE,
        payload: { idarcticle }
    }
}