import React, { Component } from 'react'

class TextArea extends Component {
    static propTypes = {

    };

    state = {
        text: ''
    }

    render() {
        const {label} = this.props
        return (
            <div>
                {label} <textarea value = {this.state.text} onChange = {this.handleChange}/>
            </div>
        )
    }

    handleChange = ev => {
        const text = ev.target.value
        this.setState({ text })
    }
}

export default TextArea