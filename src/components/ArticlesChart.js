import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ArticlesChart extends Component {
    static propTypes = {

    };

    componentWillReceiveProps(nextProps) {
        //update charts with new props
    }

    componentWillUnmount() {
        //cleanup
    }

    render() {
        //this.refs.container
//        return <div ref = "container"/>
        return <div ref = {this.setContainerRef}/>
    }

    setContainerRef = container => {
        this.container = container
        //perform some charting with d3
    }
}

export default ArticlesChart