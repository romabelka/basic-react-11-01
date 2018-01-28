import React, { Component } from 'react'
import DateRange from './DateRange'
import SelectFilter from './Select'
import {connect} from 'react-redux'

class Filters extends Component {
    static propTypes = {
    };

    render() {
        return (
            <div>
                <SelectFilter articles = {this.props.articles}/>
                <DateRange from = {this.props.filters.from}
                            to = {this.props.filters.to}/>
            </div>
        )
    }
}

export default connect(state => ({
    articles: state.articles,
    filters: state.filters
}))(Filters)