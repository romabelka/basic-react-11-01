import {createSelector} from 'reselect'

export const articlesSelector = state => state.articles
export const filtersSelector = state => state.filters
export const commentsSelector = state => state.comments
export const idSelector = (_, props) => props.id

export const createCommentSelector = () => createSelector(commentsSelector, idSelector, (comments, id) => {
    return comments[id]
})

export const createArticleSelector = () => createSelector(articlesSelector, idSelector, (articles, id) => {
    return articles[id]
})

export const filtratedArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters

    return Object.keys(articles).filter(i => {
        const published = Date.parse(articles[i].date)
        return (!selected.length || selected.includes(articles[i].id)) &&
            (!from || !to || (published > from && published < to))
    })
})