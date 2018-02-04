import {createSelector} from 'reselect'

export const articlesSelector = state => state.articles
export const filtersSelector = state => state.filters
export const commentsSelector = state => state.comments
export const idSelector = (_, props) => props.id

export const createCommentSelector = () => createSelector(commentsSelector, idSelector, (comments, id) => {
    console.log('---', 'searching for comment', id)
    return comments[id]
})

export const filtratedArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
    console.log('---', 'computing filters')
    const {selected, dateRange: {from, to}} = filters

    return Object.values(articles).filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})