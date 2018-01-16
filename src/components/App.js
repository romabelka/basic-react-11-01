import React from 'react'
import ArticleList from './components/ArticleList'
import articles from '../fixtures'

function App() {
    return (
        <div>
            <h1>App name</h1>
            <ArticleList articles = {articles} />
        </div>
    )
}

export default App