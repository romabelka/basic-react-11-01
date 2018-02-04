import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'

const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})

const deletePropFromObject = (object, property) => {
    const obj = {...object}
    delete obj[property]
    return obj
}

const getArticlesWithNewComment = (articles, articleId, commentId) => {
    const article = articles[articleId]
    const {comments} = article
    return {
        ...articles,
        [articleId]: {
            ...article,
            comments: [...comments, commentId]
        } 
    }
}

export default (articlesState = articlesMap, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return deletePropFromObject(articlesState, payload.id)

        case ADD_COMMENT:
            return getArticlesWithNewComment(articlesState, payload.articleId, payload.id)
    }

    return articlesState
}