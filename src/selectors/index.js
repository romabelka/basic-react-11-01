import {createSelector} from 'reselect'

export const articlesSelector = state => state.articles
export const filtersSelector = state => state.filters
export const commentsSelector = state => state.comments
export const idSelector = (_, props) => props.id

export const createCommentSelector = () => createSelector(commentsSelector, idSelector, (comments, id) => {
    console.log('---', 'searching for comment', id)
    return comments[id]
})

export const createFiltratedArticlesSelector = () => createSelector(articlesSelector, filtersSelector, idSelector, (articles, filters, id) => {
    console.log('---', 'computing filters')
    const {selected, dateRange: {from, to}} = filters

    const published = Date.parse(articles[id].date)
    if ((!selected.length || selected.includes(id)) &&
            (!from || !to || (published > from && published < to))) return articles[id]

    return {}
})