import {DELETE_ARTICLE, SET_FILTERS} from '../constants'
import defaultArticles from '../fixtures'

export default (articlesState = defaultArticles, action) => {
    const {type, payload} = action
    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id)

        case SET_FILTERS:
            return defaultArticles.filter(article => {
                console.log('article.id--', article.id)
                let result = false
                if (payload.filters.selectedArticle) {
                    result = payload.filters.selectedArticle.some((i)=>{
                        return i.value === article.id
                    })
                }
                return result
            })
    }

    return articlesState
}