import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleListPage from './routes/ArticleList'
import UserForm from './UserForm'
import FiltersPage from './routes/Filters'
import CounterPage from './routes/Counter'
import CommentsPage from './routes/CommentsPage'
import { Route, Redirect, Switch } from 'react-router-dom'
import Menu, { MenuItem } from './Menu'
import LangForm from './LangForm'
import {connect} from 'react-redux'

class App extends Component {
    static childContextTypes = {
        user: PropTypes.string,
        i18n: PropTypes.func
    }

    state = {
        username: 'Roma',
        lang: 'en',
        i18n: {}
    }

    getChildContext() {
        return {
            user: this.state.username,
            i18n: this.i18n.bind(this)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.i18n) {
            this.setState({ i18n: nextProps.i18n })
        }
    }

    handleUserChange = username => this.setState({ username })

    handleLangChange = lang => this.setState({ lang })

    render() {
        console.log('---', 1)
        const { lang, username } = this.state
        return (
            <div>
                <h1>App name</h1>
                <LangForm value = {lang} onChange = {this.handleLangChange}/>
                <Menu>
                    <MenuItem to = "/articles">Articles</MenuItem>
                    <MenuItem to = "/filters">Filters</MenuItem>
                    <MenuItem to = "/counter">Counter</MenuItem>
                    <MenuItem to = "/comments">Comments</MenuItem>
                </Menu>
                <UserForm value = {username} onChange = {this.handleUserChange}/>
                <Switch>
                    <Route path = "/counter" component = {CounterPage} exact/>
                    <Route path = "/filters" component = {FiltersPage}/>
                    <Route path = "/articles/new" render = {() => <h2>Add new Article form</h2>}/>
                    <Route path = "/articles" component = {ArticleListPage}/>
                    <Route path = "/comments" component = {CommentsPage}/>
                    <Route path = "/error" render = {() => <h1>Error page</h1>}/>
                    <Redirect from = "/" exact to = "/articles" />
                    <Route path = "*" render = {() => <h1>{this.i18n('NOT_FOUND')}</h1>}/>
                </Switch>
            </div>
        )
    }

    i18n(key) {
        return this.state.i18n[key] || key
    }
}

export default connect((storeState) => ({
    i18n: storeState.lang.get('i18n')
}))(App)