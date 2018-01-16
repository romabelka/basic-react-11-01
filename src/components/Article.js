import React, {Component} from 'react'
import CommentList from './CommentList';

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: props.defaultOpen,
            foo: null
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
        const comments = article.comments && <section><CommentList comments={article.comments} /></section>
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
                {comments}
            </div>
        )
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