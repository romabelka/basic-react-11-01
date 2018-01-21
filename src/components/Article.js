import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

class Article extends PureComponent {
    static propTypes = {
        defaultOpen: PropTypes.bool,
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired,
        onButtonClick: PropTypes.func
    }

    constructor(props) {
        super(props)

        this.state = {
            foo: 'bar'
        }
    }

    render() {
        console.log('---', 'rerendering')
        const {article, isOpen, onButtonClick} = this.props;

        const body = isOpen && (
            <div>
                <section>{article.text}</section>
                <CommentList comments = {article.comments} />
            </div>
        )
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={() => onButtonClick(article.id)}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

}


export default Article
