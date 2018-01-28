import React, { Component } from 'react'
import DateRange from './DateRange'
import SelectFilter from './Select'
import { connect } from 'react-redux'
import { changeFilters } from '../../AC'

class Filters extends Component {
    static propTypes = {
    };

    state = {
        selectedArticles: null
    }

    render() {
        console.log('Filters Component', this.props)
        return (
            <div>
                <SelectFilter {...this.props} />
                <DateRange {...this.props} />
            </div>
        )
    }
}

export default connect(state => {
        const { articles, filters } = state
        return { articles, filters  }
    }, { changeFilters }) (Filters)