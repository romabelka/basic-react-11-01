import React, {Component} from 'react'

class Comments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
        const {comments} = this.props;
        const list = comments && comments.map(comment => <li key={comment.id}>
            <div>
                <span><b>user: </b></span>
                <span>{comment.user}</span>
            </div>
            <div>
                <span><b>text: </b></span>
                <span><i>{comment.text}</i></span>
            </div>
        </li>);
        const body = this.state.isOpen && list && <ul>{list}</ul>
        return (
            <div>
                <button onClick={this.handleClick} disabled={list == null}>
                    {this.state.isOpen ? 'hide comments' : 'show comments'}
                </button>
                {body}
            </div>
        )
    }

    handleClick = () => {
        this.setState((state) => ({
            isOpen: !state.isOpen
        }));
    }

}

export default Comments
