import React, { Component } from 'react'
import DateRange from './DateRange'
import SelectFilter from './Select'
import {connect} from 'react-redux'

class Filters extends Component {
    static propTypes = {
    };

    render() {
        const { from, to } = this.props.filters
        return (
            <div>
                <SelectFilter articles = {this.props.articles}/>
                <DateRange from = {from}
                           to = {to}/>

            </div>
        )
    }
}


export default connect( storeState => ({...storeState}) )(Filters)

/*
export default Filters*/
