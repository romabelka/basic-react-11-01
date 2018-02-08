import React, {Component} from 'react'
import ArticleListPage from './routes/ArticleList'
import UserForm from './UserForm'
import FiltersPage from './routes/Filters'
import CounterPage from './routes/Counter'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <h1>App name</h1>
                <UserForm />
                <Switch>
                    <Route path = "/counter" component = {CounterPage} exact/>
                    <Route path = "/filters" component = {FiltersPage}/>
                    <Route path = "/articles/new" render = {() => <h2>Add new Article form</h2>}/>
                    <Route path = "/articles" component = {ArticleListPage}/>
                    <Route path = "*" render = {() => <h1>Nor found</h1>}/>
                </Switch>
            </div>
        )
    }
}
export default App