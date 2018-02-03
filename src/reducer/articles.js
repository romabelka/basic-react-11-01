import { DELETE_ARTICLE } from '../constants'
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
    }

    return articlesState
}