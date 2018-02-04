import { DELETE_ARTICLE } from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'

const articlesMap = defaultArticles.reduce((acc, article) => (
//        article.comments = article.comments || [],
        {...acc, [article.id]: article}
    ), {});

export default (articlesState = articlesMap, action) => {
    const { type, payload } = action;

    switch (type) {
        case DELETE_ARTICLE:
            const newState = {...articlesState};
            delete newState[payload.id];
            return newState;
    }

    return articlesState
}

