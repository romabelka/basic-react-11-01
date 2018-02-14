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

    state = {
        username: 'Roma'
    }

    getChildContext() {
        return {
            user: this.state.username
        }
    }

// static contextTypes = {
//     user: PropTypes.string
// }
static contextTypes = { 
    dict : PropTypes.object
}


    handleUserChange = username => this.setState({ username })

    render() {
        // console.log("12", this.context.dict  )
        console.log('---', 1)
        return (
            <div>
                <h1>{this.context.dict.APP_NAME}</h1>
               
                <Menu>
                    <MenuItem to = "/articles">{this.context.dict.LINK_ARTICLE}</MenuItem>
                    <MenuItem to = "/filters">{this.context.dict.LINK_FILTERS}</MenuItem>
                    <MenuItem to = "/counter">{this.context.dict.LINK_COUNTER}</MenuItem>
                    <MenuItem to = "/comments">{this.context.dict.LINK_COMMENTS}</MenuItem>
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