import React, {Component} from 'react'
import Comments from './Comments'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: props.defaultOpen,
            showComments: false
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

    commentClickHandle = () => {
         this.setState((state) => ({
            showComments: !state.showComments
        }))
    }

    handleClick = () => {
        this.setState((state) => ({
            isOpen: !state.isOpen
        }))
    }

    render() {
        const {article} = this.props
//        if (this.state.isOpen) throw new Error()
        const body = this.state.isOpen && <section>{article.text}</section>
        const comments = this.state.showComments && <Comments comments={article.comments}/>
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <button onClick={this.commentClickHandle}>
                    {this.state.showComments ? 'Hide comments' : 'Show Comments'}
                </button>
                {comments}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    
}


export default Article