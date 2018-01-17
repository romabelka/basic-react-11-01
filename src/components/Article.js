import React, {Component} from 'react'
import CommentList from './CommentList'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: props.defaultOpen,
            foo: null,
            isShow: false
        }
    }

    componentWillMount() {
        this.handleCommentsClick = this.handleCommentsClick.bind(this);
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
        const {article} = this.props;
//        if (this.state.isOpen) throw new Error()
        const comments = this.state.isShow &&  <CommentList comments={article.comments}/>;
        const body = this.state.isOpen && <section>{article.text}<h4>Comments<button onClick={this.handleCommentsClick}>{this.state.isShow ? 'hide' : 'show'}</button></h4>{comments}</section>;

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
    handleCommentsClick() {
        this.setState((state) => ({
            isShow: !state.isShow
        }));
    }
}


export default Article