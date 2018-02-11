import React, {Component} from 'react'
import ArticleListPage from './routes/ArticleList'
import CommentPages from './routes/CommentPages'
import UserForm from './UserForm'
import FiltersPage from './routes/Filters'
import CounterPage from './routes/Counter'
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
                    <li><NavLink to = "/comments" activeStyle = {{ color: 'red' }}>Comment pages</NavLink></li>
                </ul>
                <UserForm />
                <Switch>
                    <Route path = "/counter" component = {CounterPage} exact/>
                    <Route path = "/filters" component = {FiltersPage}/>
                    <Route path = "/articles/new" render = {() => <h2>Add new Article form</h2>}/>
                    <Route path = "/articles" component = {ArticleListPage}/>
                    <Route path = "/comments" component = {CommentPages}/>
                    <Route path = "*" render = {() => <h1>Nor found</h1>}/>
                </Switch>
            </div>
        )
    }
}
export default App