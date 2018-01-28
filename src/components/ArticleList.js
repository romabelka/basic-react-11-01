import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from './Article'
import Accordion from './common/Accordion'

class ArticleList extends Accordion {
    render() {
        const {articles} = this.props
        if (!articles.length) return <h3>No Articles</h3>
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === this.state.openItemId}
                     toggleOpen={this.toggleOpenItemMemoized(article.id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}



function mapStateToProps( state )  {

    const {articles, articlesFilters: {selected, range }} = state
    
      let selectedIds = selected.map(item => item.value)
   
   let filteredArticles = articles.filter(
       article => {
        let selectedArticles = !selected.length || selectedIds.includes(article.id)    
        let articlesInRange = !range.from || !range.to || DateInRange( range.from, range.to, article.date,)
        return selectedArticles && articlesInRange
       }
   )

    return ({articles : filteredArticles })
}

function convertData(d){
    return new Date(d).getTime()
}
function DateInRange ( from , to , dateAr ){
    const dateArConvert =convertData(dateAr)
    const fromConvert =  convertData(from)
    const toConvert =  convertData(to) 
    return   fromConvert <= dateArConvert && dateArConvert <= toConvert

}


export default connect(mapStateToProps)(ArticleList)