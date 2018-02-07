import {
    INCREMENT,
    DELETE_ARTICLE,
    CHANGE_DATE_RANGE,
    CHANGE_SELECTION,
    ADD_COMMENT,
    LOAD_ALL_ARTICLES,
    LOAD_ARTICLE,
    START,
    SUCCESS,
    FAIL,
    LOAD_COMMENT,
    LOAD_COMMENT_TO_CASHE
} from '../constants'

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

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: { comment, articleId },
        generateId: true
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

/*
export function loadArticle(id) {
    return {
        type: LOAD_ARTICLE,
        payload: { id },
        callAPI: `/api/article/${id}`
    }
}
*/

export function loadArticle(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        })

        setTimeout(() => {
            fetch(`/api/article/${id}`)
                .then(res => res.json())
                .then(response => dispatch({
                    type: LOAD_ARTICLE + SUCCESS,
                    payload: { id, response }
                }))

        }, 1000)
    }
}



export function loadCommentForArticle(idArticle) {

    return (dispatch) => {
        dispatch({
            type: LOAD_COMMENT + START,
            payload: { idArticle }
        })
        setTimeout(() => {
            fetch(`/api/comment?article=${idArticle}`)
                .then(res => res.json())
                .then(response => dispatch({
                    type: LOAD_COMMENT + SUCCESS,
                    payload: { idArticle, response }
                }))
        }, 1000)


    }

}

export function loadCommentToCashe(CasheComment, id) {

    return {
        type: LOAD_COMMENT_TO_CASHE,
        payload: { CasheComment, id }
    }

}