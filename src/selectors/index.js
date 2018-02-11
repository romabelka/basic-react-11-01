import {createSelector} from 'reselect'

export const articlesMapSelector = state => state.articles.entities
export const articlesLoadingSelector = state => state.articles.loading
export const commentsTotal = state => state.comments.total
export const filtersSelector = state => state.filters
export const commentMapSelector = state => state.comments.get('entities')
export const idSelector = (_, props) => props.id

export const articlesSelector = createSelector(articlesMapSelector, articles => articles.valueSeq().toArray())

export const commentsSelector = createSelector(commentMapSelector, comments => comments.valueSeq().toArray())

export const filtratedArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters

    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})

export const articleSelector = createSelector(articlesMapSelector, idSelector,
    (articles, id) => articles.get(id)
)

export const createCommentSelector = () => createSelector(commentMapSelector, idSelector, (comments, id) => {
    return comments.get(id)
})

