import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleListPage from './routes/ArticleList'
import UserForm from './UserForm'
import FiltersPage from './routes/Filters'
import CounterPage from './routes/Counter'
import CommentsPage from './routes/CommentsPage'
import { Route, Redirect, Switch } from 'react-router-dom'
import Menu, { MenuItem } from './Menu'

class App extends Component {
    static childContextTypes = {
        user: PropTypes.string
    }

    static contextTypes = {
        dictionary: PropTypes.object
    }

    state = {
        username: 'Roma'
    }

    getChildContext() {
        return {
            user: this.state.username
        }
    }

    handleUserChange = username => this.setState({ username })

    render() {
        console.log('---', 1)
        const { dictionary } = this.context
        return (
            <div>
                <h1>{dictionary.App_name}</h1>
                <Menu>
                    <MenuItem to = "/articles">{dictionary.Articles}</MenuItem>
                    <MenuItem to = "/filters">{dictionary.Filters}</MenuItem>
                    <MenuItem to = "/counter">{dictionary.Counter}</MenuItem>
                    <MenuItem to = "/comments">{dictionary.Comments}</MenuItem>
                </Menu>
                <UserForm value = {this.state.username} onChange = {this.handleUserChange}/>
                <Switch>
                    <Route path = "/counter" component = {CounterPage} exact/>
                    <Route path = "/filters" component = {FiltersPage}/>
                    <Route path = "/articles/new" render = {() => <h2>{dictionary.Add_new_Article_form}</h2>}/>
                    <Route path = "/articles" component = {ArticleListPage}/>
                    <Route path = "/comments" component = {CommentsPage}/>
                    <Route path = "/error" render = {() => <h1>{dictionary.Error_page}</h1>}/>
                    <Redirect from = "/" exact to = "/articles" />
                    <Route path = "*" render = {() => <h1>{dictionary.Nor_found}</h1>}/>
                </Switch>
            </div>
        )
    }
}
export default App