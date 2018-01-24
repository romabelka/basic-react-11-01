import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import ArticlesFilter from './ArticleList/filter'
import articles from '../fixtures'

class App extends Component {
    render() {
        return (
            <div>
                <h1>App name</h1>
                <ArticlesFilter articles = {articles} />
                <ArticleList articles = {articles} defaultOpenItemId = {articles[0].id}/>
                <ArticlesChart articles = {articles} />
            </div>
        )
    }
}
export default App