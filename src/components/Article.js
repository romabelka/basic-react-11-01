import React, {Component} from 'react'
import CommentList from './CommentList'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: props.defaultOpen,
            isCommentsShown: false
        }
    }

    componentWillMount() {
        console.log('---', 'mounting')
    }

    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillReceiveProps(nextProps) {
        console.log('---', 'will receive props')
        if (this.props.defaultOpen !== nextProps.defaultOpen) {
            this.setState({
            isOpen: nextProps.defaultOpen            })
        }
    }

    componentWillUpdate(nexState) {
//        if (nexState.isOpen) fetchData()
    }

    render() {
        const {article} = this.props

        const body = this.state.isOpen && <section>{article.text}</section>

        let commentsBtn = null

        if (article.comments) {
            
            let commentsTotal = article.comments.length

            commentsBtn = <button onClick={this.toggleCommentList}> {this.state.isCommentsShown ? 'Hide' : 'Comments: ' + commentsTotal } </button>
        }

        const commentList = this.state.isCommentsShown && <CommentList comments = {article.comments} />

        return (
            <div>
                <h2>
                    {article.title}

                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                {commentsBtn}
                {commentList}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    handleClick = () => {
        this.setState((state) => ({
            isOpen: !state.isOpen
        }))
    }

    toggleCommentList = () => {
        this.setState((state) => ({
            isCommentsShown: !state.isCommentsShown
        }))
    }
}


export default Article