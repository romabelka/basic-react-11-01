import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'

const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})

export default (articlesState = articlesMap, action) => {
    const { type, payload, randomId } = action
    
    switch (type) {
        case DELETE_ARTICLE:
            const obj = Object.keys(articlesState).reduce((obj, key) => {
                if (key !== payload.id) return {...obj, [key]: articlesState[key] }
                return obj
            }, {})
            
            return obj

        case ADD_COMMENT:
            const articleId = payload.articleId
            const article = articlesState[articleId]

            const updatedArticle = Object.assign({}, article, {
                comments: (article.comments || []).concat(randomId)
              })
            
            return Object.assign({}, articlesState, {[articleId]: updatedArticle})

    }

    return articlesState
}