import {DELETE_ARTICLE, FILTER} from '../constants'
import defaultArticles from '../fixtures'

export default (articlesState = defaultArticles, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id)
        case FILTER:
            const [ from, to ] = payload

          if (from && to) {

            return defaultArticles.filter(article => {
              let curDate = new Date(article.date)
              console.log(curDate, from, to)
              if (curDate.getTime() > from.getTime() && curDate.getTime() < to.getTime()) {
                return article
              }
            })
          }
    }

    return articlesState
}