import React, {Component} from 'react'

class AddCommentForm extends Component {
  state = {
    name: '',
    message: ''
  }

  render() {
    return (
      <form>
        <div>
          <label>Name</label>
          <input type="text" value={this.state.name} />
        </div>
        <div>
          <label>Message</label>
          <textarea value={this.state.message}></textarea>
        </div>
        <button>Add comment</button>
      </form>
    )
  }
}

export default AddCommentForm
