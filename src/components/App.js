import React from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import articles from '../fixtures'

function App() {
    return (
        <div>
            <h1>App name</h1>
            <UserForm />
            <ArticleList articles = {articles} />
            <ArticlesChart articles = {articles} />
        </div>
    )
}

export default App