import { DELETE_ARTICLE } from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'

const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})

export default (articlesState = articlesMap, action) => {
    const { type, payload } = action

    const deletePropFromObject = (object, property) => {
        const obj = {...object}
        delete obj[property]
        return obj
    }

    switch (type) {
        case DELETE_ARTICLE:
            return deletePropFromObject(articlesState, payload.id)
    }

    return articlesState
}