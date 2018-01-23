import React from 'react'

export default Component => class Validate extends React.Component {
  state = {
    value: '',
    valid: false
  }

  render() {
    return <Component {...this.props} {...this.state} onChange = {this.handleChange}/>
  }

  handleChange = ev => {
    const value = ev.target.value
    if (value.length > 10 && value.length < 50) {
      this.setState({ value, valid: true })
    } else {
      this.setState({ value, valid: false })
    }
  }
}