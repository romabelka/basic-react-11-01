import {createSelector} from 'reselect'

export const articlesMapSelector = state => state.articles.entities
export const articlesLoadingSelector = state => state.articles.loading
export const filtersSelector = state => state.filters
export const idSelector = (_, props) => props.id
export const commentMapSelector = state => state.comments.get('entities')
export const contentMapSelector = state => state.pages.entities
export const pageSelector = (_, props) => props.match.params.page || 1

export const articlesSelector = createSelector(articlesMapSelector, articles => articles.valueSeq().toArray())
export const contentSelector = createSelector(contentMapSelector, pageSelector, (content, page) => {
    console.log(content.has(page) ? content.get(page).toJS() : [])
    return content.has(page) ? content.get(page).toJS() : []
})
export const loadingContentSelector = (state, props) => {
    return state.pages.entities.size ? state.pages.entities.get(props.match.params.page).contentLoading : true
}

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