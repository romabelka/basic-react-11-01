import React, {Component} from 'react'
import UserForm from '../UserForm'
import Select from 'react-select'
import DayPicker from 'react-day-picker'

import 'react-select/dist/react-select.css'
import 'react-day-picker/lib/style.css'

class ArticlesFilter extends Component {
    state = {
        selected: null
    }

    handleChange = selected => this.setState({ selected })

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <UserForm />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleChange} multi />
                <DayPicker />
            </div>
        )
    }
}
export default ArticlesFilter