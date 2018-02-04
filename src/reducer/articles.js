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
                // console.log(" тут произошло обновление  " + payload.idarcticle)
            const articleid = payload.idarcticle;
            // console.log(articlesState[id])
            // console.log(store)
            // console.log(store.getState().comments)
            // console.log(   Object.key(store.getState().comments).reduce( ( obj ) )    )
            console.log(Object.values(store.getState().comments).length)
            const l = Object.values(store.getState().comments).length;

            console.log(Object.values(store.getState().comments)[l - 1])


            const newIdComment = Object.values(store.getState().comments)[l - 1].id
            console.log(newIdComment)


            const art = Object.keys(articlesState).reduce((obj, key) => {


                if (key == articleid) {
                    console.log(articlesState[key].comments)
                    articlesState[key].comments.push(newIdComment)
                    console.log(articlesState[key].comments)
                    return {...obj, [key]: articlesState[key] }
                }
                if (key !== articleid) return {...obj, [key]: articlesState[key] }

            }, {})

            return art






            // Object.values(store.getState().comments).forEach(element => {
            //     console.log(" zlo" + element)
            // });







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