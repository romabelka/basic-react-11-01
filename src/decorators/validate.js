import React from 'react'

export default (OriginalComponent) => class ValidateComponent extends React.Component {
    state = {
        value: '',
        invalid: null
    }

    handleValidate = ev => {
        const value = ev.target.value
        this.setState({ 
            value, 
            invalid: 50 < value.length || value.length < 10 ? true : false 
        })
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} onChange = {this.handleValidate}/>
    }
}

