import { Map, Record } from 'immutable'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS, FAIL, LOAD_COMMENTS } from '../constants'
import {arrToMap} from './utils'

const ArticleRecord = Record({
    id: null,
    title: null,
    text: null,
    date: null,
    loading: false,
    comments: [],
    commentsLoading: false,
    commentsLoaded: false
})

const ReducerRecord = Record({
    entities: arrToMap([], ArticleRecord),
    loading: false,
    loaded: false,
    error: null
})

export default (articles = new ReducerRecord(), action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.deleteIn(['entities', payload.id])

        case ADD_COMMENT:
            return articles.updateIn(
                ['entities', payload.articleId, 'comments'],
                (comments) => comments.concat(randomId)
            )

        case LOAD_ALL_ARTICLES + START:
            return articles.set('loading', true)

        case LOAD_ALL_ARTICLES + FAIL:
            return articles
                .set('loading', false)
                .set('error', error)

        case LOAD_ALL_ARTICLES + SUCCESS:
            return articles
                .set('loading', false)
                .set('loaded', true)
                .set('entities', arrToMap(response, ArticleRecord))

        case LOAD_ARTICLE + START:
            return articles.setIn(['entities', payload.id, 'loading'], true)

        case LOAD_ARTICLE + SUCCESS:
            return articles.setIn(['entities', payload.id], new ArticleRecord(payload.response))

        case LOAD_COMMENTS + START:
            return articles.setIn(['entities', payload.id, 'commentsLoading'], true)
        
        case LOAD_COMMENTS + FAIL:
            return articles
                .set('error', error)
        
        case LOAD_COMMENTS + SUCCESS:
            return articles
                .setIn(['entities', payload.id, 'commentsLoading'], false)
                .setIn(['entities', payload.id, 'commentsLoaded'], true)
   }

    return articles
}