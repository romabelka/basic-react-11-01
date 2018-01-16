import React from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'

function App() {
    return (
        <div>
            <h1>Newsfeed</h1>
            <ArticleList articles = {articles} />
        </div>
    )
}

export default App