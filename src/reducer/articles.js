import { DELETE_ARTICLE } from '../constants'
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
            return articlesState //.filter(article => article.id !== payload.id)
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