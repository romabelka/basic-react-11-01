import { createSelector } from 'reselect'
import comments from '../reducer/comments';
import articles from '../reducer/articles';

export const articlesMapSelector = state => state.articles.entities


export const articlesLoadingSelector = state => state.articles.loading
export const filtersSelector = state => state.filters
export const commentListSelector = state => state.comments
export const idSelector = (_, props) => props.id

export const articlesSelector = createSelector(articlesMapSelector, articles => articles.valueSeq().toArray())

export const filtratedArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
    const { selected, dateRange: { from, to } } = filters

    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})

// export const createCommentSelector = () => createSelector(commentListSelector, idSelector, (comments, id) => {
//     return comments.get(id)
// })

export const commentsMapSelector = state => state.comments.entities
export const commentsSelector = createSelector(commentsMapSelector, comments => comments.valueSeq().toArray())


export const commentsLoadingSelector = state => state.comments.loading

export const commentSelectorId = createSelector(commentsSelector, idSelector, (comments, id) => {
    return comments.find(comment => comment.id == id)
})

/// непонятно как получить  комеенты кеша которые там есть в
export const commentsSelectorCasheArt = createSelector(articlesSelector, idSelector, (articles, id) => {
    return (articles.find(article => article.id == id)).comments
})