import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h2>{this.props.count} <button onClick = {this.handleIncrement}>increment</button></h2>
            </div>
        )
    }

    handleIncrement = () => {
        const action = increment()
        this.props.dispatch(action)
    }
}

const mapStateToProps = (storeState) => ({
    count: storeState.counter
})

export default connect(mapStateToProps)(Counter)