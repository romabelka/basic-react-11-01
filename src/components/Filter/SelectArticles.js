import React, {Component} from 'react'
import Select from 'react-select'

import 'react-select/dist/react-select.css'

class SelectArticles extends Component {
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
                <Select options = {options} value = {this.state.selected} onChange = {this.handleChange} multi />
            </div>
        )
    }
}
export default SelectArticles