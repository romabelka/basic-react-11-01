import React, { Component } from 'react'

class AddComment extends Component {
    static propTypes = {

    };

    state = {
        name: '',
        text: ''
    }

    render() {
        return (
            <div>
                Username: <input type = "text" value = {this.state.name} onChange = {this.handleChange('name')}/>
                Message: <textarea type = "text" value = {this.state.text} onChange = {this.handleChange('text')}/>
            </div>
        )
    }

    handleChange = stateName => ev => {
        const stateVal = ev.target.value
        const newState = {}

        if (stateVal.length > 50) return

        newState[stateName] = stateVal
        this.setState(newState)
    }

    /* handleChangeName = ev => {
        const name = ev.target.value
        if (name.length > 50) return

        this.setState({ name: name })
    }

    handleChangeText = ev => {
        const text = ev.target.value
        if (text.length < 10 || text.length > 50) return

        this.setState({ text: text })
    } */
}

export default AddComment