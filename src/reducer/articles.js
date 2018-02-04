import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'

const articlesMap = defaultArticles.reduce((acc, article) => (
    article.comments = article.comments || [],
        {...acc, [article.id]: article}
    ), {});

export default (articlesState = articlesMap, action) => {
    const { type, payload } = action;

    switch (type) {
        case DELETE_ARTICLE:
            const newState = {...articlesState};
            delete newState[payload.id];
            return newState;

        case ADD_COMMENT:
            const targetArticle = {...articlesState[payload.targetArticle]};
            targetArticle.comments = [...targetArticle.comments, payload.id];

            return {
                ...articlesState,
                [payload.targetArticle]: targetArticle
            }

    }

    return articlesState
}

