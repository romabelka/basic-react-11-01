import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleListPage from './routes/ArticleList'
import UserForm from './UserForm'
import FiltersPage from './routes/Filters'
import CounterPage from './routes/Counter'
import CommentsPage from './routes/CommentsPage'
import {Route, Redirect, Switch} from 'react-router-dom'
import Menu, {MenuItem} from './Menu'
import LangProvider from './common/LangProvider'

class App extends Component {
    static childContextTypes = {
        user: PropTypes.string
    }

    state = {
        username: 'Roma',
        language: 'ru'
    }

    getChildContext() {
        return {
            user: this.state.username
        }
    }

    changeLanguage = language => ev => this.setState({language})

    handleUserChange = username => this.setState({username})

    render() {
        return (
            <LangProvider language={this.state.language}>
                <div>
                    <h1>App name</h1>
                    <ul>
                        <li onClick={this.changeLanguage('en')}>English</li>
                        <li onClick={this.changeLanguage('ru')}>Russian</li>
                    </ul>
                    <Menu>
                        <MenuItem to="/articles">Articles</MenuItem>
                        <MenuItem to="/filters">Filters</MenuItem>
                        <MenuItem to="/counter">Counter</MenuItem>
                        <MenuItem to="/comments">Comments</MenuItem>
                    </Menu>
                    <UserForm value={this.state.username} onChange={this.handleUserChange}/>
                    <Switch>
                        <Route path="/counter" component={CounterPage} exact/>
                        <Route path="/filters" component={FiltersPage}/>
                        <Route path="/articles/new" render={() => <h2>Add new Article form</h2>}/>
                        <Route path="/articles" component={ArticleListPage}/>
                        <Route path="/comments" component={CommentsPage}/>
                        <Route path="/error" render={() => <h1>Error page</h1>}/>
                        <Redirect from="/" exact to="/articles"/>
                        <Route path="*" render={() => <h1>Nor found</h1>}/>
                    </Switch>
                </div>
            </LangProvider>
        )
    }
}

export default App