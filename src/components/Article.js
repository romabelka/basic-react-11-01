import React, {Component} from 'react'
import CommentList from './CommentList'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: props.defaultOpen,
			isOpenComments: props.defaultOpenComments,
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
        const comments = article.comments && 
							this.state.isOpenComments && 
							<CommentList comments = {article.comments} />
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
				<h4>
					Комментарии
					<button onClick={this.handleCommentsClick}>
						{this.state.isOpenComments ? 'close' : 'open'}
					</button>
				</h4>
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
	
	handleCommentsClick = () => {
		this.setState((state) => ({
            isOpenComments: !state.isOpenComments
        }))
	}
}


export default Article