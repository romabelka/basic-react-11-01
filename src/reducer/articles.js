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
            /* const newArticlesState = {...articlesState}
            delete newArticlesState[payload.id]
            return newArticlesState; */
            return arrToObj(Object.values(articlesState).filter(article => article.id !== payload.id))
        
        case ADD_COMMENT:
            const {id, articleId} = payload.comment;
            const newArticlesState = {...articlesState}
            newArticlesState[articleId].comments.push(id);
            return newArticlesState;
    }

    return articlesState
}