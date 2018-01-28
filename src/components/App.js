import React, {Component} from 'react'
import ArticleList from './ArticleList'
import Filters from './Filters'
import Counter from './Counter'

class App extends Component {
    render() {
        return (
            <div>
                <h1>App name</h1>
                <Counter />
                <Filters />
                <ArticleList />
            </div>
        )
    }
}
export default App