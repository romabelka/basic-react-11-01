import React, {Component} from 'react'
import Comments from './Comments'

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
    }

    render() {
        const {article} = this.props
        const body = this.state.isOpen && <div><section>{article.text}</section><Comments comments = {article.comments} /></div>
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
    }
}

export default Article