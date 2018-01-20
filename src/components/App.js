import React from 'react'
import ArticleList from './ArticleList'
import ArticleListInheritance from './ArticleListInheritance'
import articles from '../fixtures'

function App() {
    return (
        <div>
            <h1>App name</h1>
            <ArticleList articles = {articles} />
            <ArticleListInheritance articles = {articles} />
        </div>
    )
}

export default App
