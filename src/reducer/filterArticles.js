import {SET_FILTERS, DELETE_ARTICLE} from '../constants'
import defaultArticles from '../fixtures'

export default (filterArticles = defaultArticles, action) => {
    const {type, payload} = action
    const isRange = (date, from, to) => {
      const dateWithoutTime = date && new Date(date.getFullYear(), date.getMonth(), date.getDate())
      const fromWithoutTime = from && new Date(from.getFullYear(), from.getMonth(), from.getDate())
      const toWithoutTime = to && new Date(to.getFullYear(), to.getMonth(), to.getDate())

      if (toWithoutTime) {
        return dateWithoutTime >= fromWithoutTime && dateWithoutTime <= toWithoutTime
      } else if (fromWithoutTime) {
        return dateWithoutTime.getTime() == fromWithoutTime.getTime()
      }
      return true
    }
    switch (type) {
      case SET_FILTERS:
        return payload.filterArticles.filter((article, i) => {
          let result = true
          if (payload.filters.selectedArticle && payload.filters.selectedArticle.length) {
            result = result && payload.filters.selectedArticle.some(i=>{
              return i.value === article.id
            })
          }
          if (payload.filters.dateRange) {
            const {from, to} = payload.filters.dateRange
            let range = isRange(new Date(article.date), from, to)
            console.log('range--', range)
            result = result && range
          }
          return result
        })
      case DELETE_ARTICLE:
        return filterArticles.filter(article => article.id !== payload.id)

    }
    return filterArticles
}