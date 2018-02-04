import { DELETE_ARTICLE } from '../constants'
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
    }

    return articlesState
}