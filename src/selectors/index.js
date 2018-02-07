import {createSelector} from 'reselect'

export const articlesMapSelector = state => state.articles.entities
export const articlesLoadingSelector = state => state.articles.loading
export const filtersSelector = state => state.filters
export const commentListMapSelector = state => state.comments.entities
export const commentsLoadingSelector = state => state.comments.loading
export const commentsLoadedIDSelector = state => state.comments.articleID
export const idSelector = (_, props) => props.id

export const articlesSelector = createSelector(articlesMapSelector, articles => articles.valueSeq().toArray())

export const filtratedArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters

    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})

export const commentListSelector = createSelector(commentListMapSelector, comments => comments.valueSeq().toArray())

export const commentSelector = createSelector(commentListSelector, idSelector, (comments, id) => {
    return comments.find(item => item.id == id)
})