import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Select from 'react-select'
import DayPick from './DayPicker';
import articles from '../fixtures'

import 'react-select/dist/react-select.css'
import 'react-day-picker/lib/style.css'

class App extends Component {
    state = {
        selected: null
    }

    handleChange = selected => this.setState({ selected })

    render() {
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <h1>App name</h1>
                <UserForm />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleChange} multi />
                <DayPick />
                <ArticleList articles = {articles} defaultOpenItemId = {articles[0].id}/>
                <ArticlesChart articles = {articles} />
            </div>
        )
    }
}
export default App