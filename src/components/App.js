import React, {Component} from 'react'
import ArticleListPage from './routes/ArticleList'
import UserForm from './UserForm'
import FiltersPage from './routes/Filters'
import CounterPage from './routes/Counter'
import { Route } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <h1>App name</h1>
                <UserForm />
                <Route path = "/counter" component = {CounterPage}/>
                <Route path = "/filters" component = {FiltersPage}/>
                <Route path = "/articles" component = {ArticleListPage}/>
            </div>
        )
    }
}
export default App