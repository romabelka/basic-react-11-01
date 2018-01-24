import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import ArticlesFilter from './Filter/index'
import articles from '../fixtures'

import 'react-select/dist/react-select.css'

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