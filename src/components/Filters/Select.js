import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {filterSelected} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

/*    state = {
        selected: null
    }*/

    //handleChange = selected => (console.log(selected), this.setState({ selected }))

    handleChange = () => {
        const {filterSelected, selected} = this.props
        filterSelected(selected)
    }

    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={this.props.selected}
            onChange={this.handleChange}
            multi
        />
    }
}

export default connect(storeState => ({
    selected: storeState.filters.selected
}), { filterSelected })(SelectFilter)