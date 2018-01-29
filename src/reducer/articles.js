import {DELETE_ARTICLE, FILTER_DATERANGE, FILTER_SELECTED} from '../constants'
import defaultArticles from '../fixtures'

export default (articlesState = defaultArticles, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id);

    }

    return articlesState
}