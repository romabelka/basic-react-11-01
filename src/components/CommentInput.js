import React, {Component} from 'react'
import PropTypes from 'prop-types'

const failStyle = {
    'border-color': 'red'
}

class CommentInput extends Component {

    state = {
        inputValue: null,
        inputBorder: 'black',
    }

    // changeHandle = (value) => this.setState({ inputValue: value.target })
    changeHandle = (e) => this.setState({ inputValue: e.target.value })
    inputValidate = () => {
        if (this.state.inputValue.length < 10 || this.state.inputValue.length > 50) {
            this.setState({ inputBorder: 'red' })
        } else this.setState({ inputBorder: 'black' })

    }


    render() {

        console.log(this.state)
        return (
            <div>
                <input style={{'border-color': `${this.state.inputBorder}`}} onChange={(ev) => this.changeHandle(ev)}/>
                <button onClick={this.inputValidate}>Send</button>
            </div>
        )
    }
}


CommentInput.defaultProps = {
    articles: []
}

CommentInput.propTypes = {
    articles: PropTypes.array.isRequired
}

export default CommentInput