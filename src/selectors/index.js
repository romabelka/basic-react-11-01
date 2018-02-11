import { createSelector } from 'reselect'

export const articlesMapSelector = state => state.articles.entities
export const articlesLoadingSelector = state => state.articles.loading
export const filtersSelector = state => state.filters
export const commentMapSelector = state => state.comments.get('entities')
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

export const articleSelector = createSelector(articlesMapSelector, idSelector,
    (articles, id) => articles.get(id)
)

export const createCommentSelector = () => createSelector(commentMapSelector, idSelector, (comments, id) => {
    return comments.get(id)
})
export const pageId = (_, props) => props.page
export const commentsAllSelector = createSelector(commentMapSelector, pageId, (comments, page) => {

    // console.log("zloo")
    // console.log(page)


    let end = page * 5; // 1 = 5  2 = 10  3 = 15
    let start = end - 5;
    console.log(comments.valueSeq().toArray())

    return comments.valueSeq().toArray().slice(start, end)
})

export const commentsGetTotal = state => state.comments.get('total')