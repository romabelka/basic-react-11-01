import {createSelector} from 'reselect'

export const articlesSelector = state => state.articles
export const filtersSelector = state => state.filters
export const commentsSelector = state => state.comments
export const idSelector = (_, props) => props.id

export const createArticleSelector = () => createSelector(articlesSelector, idSelector, (articles, id) => {
    console.log('---', 'searching for article', id)
    return articles[id]
})

export const createCommentSelector = () => createSelector(commentsSelector, idSelector, (comments, id) => {
    console.log('---', 'searching for comment', id)
    return comments[id]
})

export const filtratedArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
    console.log('---', 'computing filters')
    const {selected, dateRange: {from, to}} = filters
    
    return Object.keys(articles).filter(id => {
        const published = Date.parse(articles[id].date)
        return (!selected.length || selected.includes(id)) &&
            (!from || !to || (published > from && published < to))
    })
})