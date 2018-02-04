import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'

const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})

export default (articlesState = articlesMap, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return Object.keys(articlesState).reduce((acc, id) => {
                if (id !== payload.id) {
                  return {...acc, [id]: articlesState[id]}
                }
                return acc;
              }, {})

        case ADD_COMMENT: {
            const { articleId, comment } = payload
            const { comments = [] } = articlesState[articleId]
            return {
                ...articlesState,
                [articleId]: {
                    ...articlesState[articleId],
                    comments: [...comments, comment.id]
                }
            }
        }
    }

    return articlesState
}