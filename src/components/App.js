import React, {Component} from 'react'
import ArticleListPage from './routes/ArticleList'
import UserForm from './UserForm'
import FiltersPage from './routes/Filters'
import CounterPage from './routes/Counter'
import CommentsPage from './routes/CommentsPagination'
import { Route, Switch, NavLink } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <h1>App name</h1>
                <ul>
                    <li><NavLink to = "/articles" activeStyle = {{ color: 'red' }}>Articles</NavLink></li>
                    <li><NavLink to = "/filters" activeStyle = {{ color: 'red' }}>Filters</NavLink></li>
                    <li><NavLink to = "/counter" activeStyle = {{ color: 'red' }}>Counter</NavLink></li>
                    <li><NavLink to = "/comments/1" activeStyle = {{ color: 'red' }}>Comments</NavLink></li>
                </ul>
                <UserForm />
                <Switch>
                    <Route path = "/counter" component = {CounterPage} exact/>
                    <Route path = "/filters" component = {FiltersPage}/>
                    <Route path = "/comments" component = {CommentsPage}/>
                    <Route path = "/articles/new" render = {() => <h2>Add new Article form</h2>}/>
                    <Route path = "/articles/1" component = {ArticleListPage}/>
                    <Route path = "*" render = {() => <h1>Not found</h1>}/>
                </Switch>
            </div>
        )
    }
}
export default App