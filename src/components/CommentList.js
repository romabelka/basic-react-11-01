import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: props.defaultOpen
        }
    }

    render() {

        if (this.props.comments) {

            const commentElements = this.props.comments.map((comment, index) => <li key={comment.id}>
                <Comment comment = {comment}/>
            </li>);

            const count = this.props.comments.length;

            const body = this.state.isOpen && <ol>{commentElements}</ol>;

            return (
                <div>
                    {body}
                    <button type="button" onClick={this.showComment}>
                        {this.state.isOpen ? 'close comments' : 'open comments'}
                        &nbsp;({count})
                    </button>
                </div>
            );

        } else {
            return null;
        }

    }

    showComment = () => {
        this.setState((state) => ({
            isOpen: !state.isOpen
        }))
    }

}

export default CommentList;
