import React, {Component} from 'react'
import CommentList from './CommentList'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: props.defaultOpen,
            foo: null,
            commentsCollapsed: true
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
        if (this.props.defaultOpen !== nextProps.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }

    componentWillUpdate(nexState) {
//        if (nexState.isOpen) fetchData()
    }
/*
    state = {
        isOpen: true
    }
*/

    render() {
        const {article} = this.props
//        if (this.state.isOpen) throw new Error()
        const body = this.state.isOpen && <section>{article.text}</section>
        const collapsed = this.state.commentsCollapsed
        const articleComments = article.comments
        const commentList = !collapsed && articleComments && <CommentList comments={articleComments} />

        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                    <button onClick={this.toggleComments}>
                        {collapsed ? 'show' : 'hide'} comments
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
                {commentList}
            </div>
        )
    }

    toggleComments = () => {
      this.setState((state) => ({
        commentsCollapsed: !state.commentsCollapsed
      }))
    }

    handleClick = () => {
        this.setState((state) => ({
            isOpen: !state.isOpen
        }))
/*
        this.setState((state) => {
            console.log('---', this.state, state)
            return {
                isOpen: !state.isOpen
            }
        })
*/
    }
}


export default Article
