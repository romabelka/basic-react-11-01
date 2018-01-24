import React, {Component} from 'react'
import './style.css'

class AddCommentForm extends Component {
  state = {
    name: '',
    message: '',
    nameError: false,
    messageError: false
  }

  render() {
    return (
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            className={this.state.nameError ? 'is-error' : ''}
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            value={this.state.message}
            onChange={this.handleInputChange}
            name="message"
            className={this.state.messageError ? 'is-error' : ''}
          >
          </textarea>
        </div>
        <button>Add comment</button>
      </form>
    )
  }

  handleInputChange = e => {
    const { value, name } = e.target

    if (value.length < 10 || value.length > 50) {
      this.setState({
        [`${name}Error`]: true
      })
    } else {
      this.setState({
        [`${name}Error`]: false
      })
    }

    this.setState({
      [name]: value
    })
  }
}

export default AddCommentForm
