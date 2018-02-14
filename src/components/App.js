import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleListPage from './routes/ArticleList'
import UserForm from './UserForm'
import FiltersPage from './routes/Filters'
import CounterPage from './routes/Counter'
import CommentsPage from './routes/CommentsPage'
import { Route, Redirect, Switch } from 'react-router-dom'
import Menu, { MenuItem } from './Menu'
import Header from './Header'
import {locales} from '../locales'
import {getLocaleText} from './utils'

class App extends Component {
    static childContextTypes = {
        user: PropTypes.string,
        locale: PropTypes.object
    }

    state = {
        username: 'Roma',
        localeName: null
    }

    getChildContext() {
        return {
            user: this.state.username,
            locale: this.state.localeName != null ? locales[this.state.localeName] : null
        }
    }

    handleUserChange = username => this.setState({ username })

    handleLocaleChange = localeName => () => this.setState({ localeName })

    render() {
        console.log('---', 1, this.context)
        return (
            <div>
                <Header onLocaleChange = {this.handleLocaleChange} />
                <Menu>
                    <MenuItem to = "/articles">Articles</MenuItem>
                    <MenuItem to = "/filters">Filters</MenuItem>
                    <MenuItem to = "/counter">Counter</MenuItem>
                    <MenuItem to = "/comments">Comments</MenuItem>
                </Menu>
                <UserForm value = {this.state.username} onChange = {this.handleUserChange}/>
                <Switch>
                    <Route path = "/counter" component = {CounterPage} exact/>
                    <Route path = "/filters" component = {FiltersPage}/>
                    <Route path = "/articles/new" render = {() => <h2>Add new Article form</h2>}/>
                    <Route path = "/articles" component = {ArticleListPage}/>
                    <Route path = "/comments" component = {CommentsPage}/>
                    <Route path = "/error" render = {() => <h1>Error page</h1>}/>
                    <Redirect from = "/" exact to = "/articles" />
                    <Route path = "*" render = {() => <h1>Nor found</h1>}/>
                </Switch>
            </div>
        )
    }
}
export default App