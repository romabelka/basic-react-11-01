import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
      error: null
    }

    componentDidCatch(error) {
      console.log('---', error)
      this.setState({ error })
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state}/>
    }
}