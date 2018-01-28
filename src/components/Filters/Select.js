import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux';
import { articlesFilterByKeys } from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: null
    }

    handleChange = selected => {
      let keys = selected.map(article => article.value);
      let action = articlesFilterByKeys(keys);
      this.props.dispatch(action);
      this.setState({ selected })
    }

    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={this.state.selected}
            onChange={this.handleChange}
            multi
        />
    }
}

export default connect(state => ({ articles: state.articles}))(SelectFilter);