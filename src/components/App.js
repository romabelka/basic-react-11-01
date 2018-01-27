import React, {Component} from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import {connect} from 'react-redux'

class App extends Component {
    render() {
        const {articles} = this.props
        return (
            <div>
                <h1>App name</h1>
                <UserForm />
                <Counter />
                <Filters articles = {articles}/>
                <ArticleList />
            </div>
        )
    }
}
const mapStateToProps = (storeState) => ({
    articles: storeState.articles
})

export default connect(mapStateToProps)(App)