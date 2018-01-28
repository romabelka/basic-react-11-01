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
                <DateRange {...this.props.filters}/>
            </div>
        )
    }
}

export default connect(storeState => ({
    articles: storeState.articles,
    filters: storeState.filters
}))(Filters)

/*
export default Filters*/
