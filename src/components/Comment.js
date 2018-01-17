import React, {Component} from 'react'

class Comment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: props.defaultOpen
        }
    }

    render() {
        const {comment} = this.props
        const body = this.state.isOpen && <section>{comment.text}</section>
        return (
            <div>
                <h3>
                    {comment.id}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h3>
                {body}
                <h3>{comment.user}</h3>
            </div>
        )
    }

    handleClick = () => {
        this.setState((state) => ({
            isOpen: !state.isOpen
        }))
    }
}


export default Comment