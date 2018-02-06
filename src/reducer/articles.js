import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'

const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})

function arrToObj(arr) {
    return arr.reduce((acc, article) => ({
        ...acc,
        [article.id]: article
    }), {})
}

export default (articlesState = articlesMap, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return arrToObj(Object.values(articlesState).filter(article => article.id !== payload.id))
        
        case ADD_COMMENT:
            const {id, articleId} = payload.comment;
            const newArticle = articlesState[articleId];
            return {...articlesState, [articleId]: {...newArticle, comments: (newArticle.comments || []).concat(id)}}
    }

    return articlesState
}