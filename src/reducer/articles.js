import { DELETE_ARTICLE, ADD_NEW_ID_COMMENT_TO_ARCTICLE } from '../constants'
import { normalizedArticles as defaultArticles } from '../fixtures'


const articleMap = defaultArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})


export default (articlesState = articleMap, action) => {
    const { type, payload } = action
    /// исправить потом
    switch (type) {
        case DELETE_ARTICLE:

            const articles = Object.keys(articlesState).reduce((obj, key) => {
                if (key !== payload.id) return {...obj, [key]: articlesState[key] }
                return obj
            }, {})

            return articles
        case ADD_NEW_ID_COMMENT_TO_ARCTICLE:
            console.log("  тут будет логика добавления ")




            return articlesState


            // return articlesState.filter(article => article.id !== payload.id)
    }

    return articlesState
}





// import {normalizedComments as defaultComments} from '../fixtures'

// const commentsMap = defaultComments.reduce((acc, comment) => ({
//     ...acc,
//     [comment.id]: comment
// }), {})

// export default (state = commentsMap, action) => {
//     const { type } = action

//     switch (type) {

//     }

//     return state
// }