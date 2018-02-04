import { DELETE_ARTICLE, ADD_COMMENT, OPEN_ARTICLE } from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'

const articlesMap = defaultArticles.reduce((acc, article) => {
    article.comments = article.comments != null ? article.comments : []
    return {
        ...acc,
        [article.id]: article
    }
}, {})

export default (articlesState = articlesMap, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            articlesState = {...articlesState}
            delete articlesState[payload.id]
            return articlesState
        case ADD_COMMENT:
            let article = {...articlesState[payload.articleId]}
            article.comments = [...article.comments]
            article.comments.push(payload.id)
            return {
                ...articlesState,
                [payload.articleId]: article
            }
    }

    return articlesState
}