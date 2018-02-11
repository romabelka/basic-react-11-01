import {createSelector} from 'reselect'

export const articlesMapSelector = state => state.articles.entities
export const articlesLoadingSelector = state => state.articles.loading
export const filtersSelector = state => state.filters
export const commentPagesMapSelector = state => state.commentPages.entities
export const commentPagesTotalSelector = state => state.commentPages.total
export const commentsMapSelector = state => state.comments.get('entities')

export const idSelector = (_, props) => props.id
export const numberSelector = (_, props) => props.number

export const articlesSelector = createSelector(articlesMapSelector, articles => articles.valueSeq().toArray())

export const commentsSelector = createSelector(commentsMapSelector, comments => comments.valueSeq().toArray())

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

export const commentPageSelector = createSelector(commentPagesMapSelector, numberSelector, commentsSelector,
    (commentPages, number, comments) => {
        const page = commentPages.get(number)
        if (!page) return null;
        const commentIds = page.get('comments')
        return {
            commentsLoading: page.get('commentsLoading'),
            commentsLoaded: page.get('commentsLoaded'),
            comments: page.get('commentsLoaded') ? comments.filter(comment => {
                return commentIds.indexOf(comment.id) != -1
            }) : null
        }
    }
)

export const createCommentSelector = () => createSelector(commentsMapSelector, idSelector, (comments, id) => {
    return comments.get(id)
})